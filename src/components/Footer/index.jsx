/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Footer.css';

const Footer = () => {
  const [selectedTheme, setSelectedTheme] = useState(false);
  const { themes, preferredTheme, setPreferredTheme, saveSelectedTheme } =
    useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: preferredTheme }}>
      <div className="footer-content">
        <div className="footer-container">
          {themes ? (
            themes.map((theme) => {
              const { id, colorHexCode } = theme;
              return (
                <button
                  type="button"
                  key={id}
                  className="theme-button"
                  onClick={() => {
                    setSelectedTheme(true);
                    setPreferredTheme(colorHexCode);
                  }}
                  style={{ backgroundColor: colorHexCode }}
                />
              );
            })
          ) : (
            <div>loading...</div>
          )}
        </div>

        <div className="save-buton">
          {selectedTheme && (
            <button
              type="button"
              onClick={() => {
                setSelectedTheme(false);
                saveSelectedTheme();
              }}
            >
              Save Theme
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
