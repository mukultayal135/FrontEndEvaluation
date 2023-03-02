/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react';
import { GET_THEMES, UPDATE_THEME } from '../constants/apiEndPoints';
import makeRequest from '../utils/makeRequest';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [preferredTheme, setPreferredTheme] = useState('#000000');
  const [themes, setThemes] = useState();
  useEffect(() => {
    makeRequest(GET_THEMES).then((response) => {
      setThemes(response.themes);
      setPreferredTheme(
        response.themes.find((theme) => theme.id === response.preferredThemeId)
          .colorHexCode
      );
    });
  }, []);
  const saveSelectedTheme = () => {
    const selectedTheme = themes.find(
      (theme) => theme.colorHexCode === preferredTheme
    );

    makeRequest(UPDATE_THEME, {
      data: {
        preferredThemeId: selectedTheme.id,
      },
    });
  };
  return (
    <ThemeContext.Provider
      value={{
        themes,
        preferredTheme,
        setPreferredTheme,
        saveSelectedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
