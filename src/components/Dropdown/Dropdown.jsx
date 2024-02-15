import React, { useState, useRef, useEffect } from 'react';
import useTheme from '../../contexts/theme';
import './Dropdown.css';

const Dropdown = ({ handleRegionChange }) => {
  const { themeMode } = useTheme();
  const [showWindow, setShowWindow] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region');
  const dropdownRef = useRef(null);

  const handleClick = (region) => {
    setSelectedRegion(region);
    handleRegionChange(region);
    setShowWindow(!showWindow);
  };

  const handleWindowClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowWindow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleWindowClick);

    return () => {
      document.removeEventListener('mousedown', handleWindowClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-toggle" onClick={() => setShowWindow(!showWindow)}>
        <span>{selectedRegion ? selectedRegion : 'Filter by Region'}</span>
        <div>
          {themeMode === 'light' ? (
            <img src="./images/arrow-down-dark.svg" alt="Dropdown Menu" />
          ) : (
            <img src="./images/arrow-down-light.svg" alt="Dropdown Menu" />
          )}
        </div>
      </div>
      {showWindow && (
        <div className="dropdown-content">
          <div className="dropdown-link rounded-t-xl" onClick={() => handleClick(null)}>
            All
          </div>
          <div className="dropdown-link" onClick={() => handleClick('Americas')}>
            Americas
          </div>
          <div className="dropdown-link" onClick={() => handleClick('Asia')}>
            Asia
          </div>
          <div className="dropdown-link" onClick={() => handleClick('Europe')}>
            Europe
          </div>
          <div className="dropdown-link" onClick={() => handleClick('Africa')}>
            Africa
          </div>
          <div className="dropdown-link rounded-b-xl" onClick={() => handleClick('Oceania')}>
            Oceania
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
