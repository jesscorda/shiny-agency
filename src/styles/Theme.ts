import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    accent: '#36827fff',
    primary: '#f4ededff',
    secondary: '#877666ff',
    background: '#f4ededf',
    text: '#000'
  },
  shadows: {
    activeButton:
      '0px 10px 20px rgba(0, 0, 0, 0.2),    0px 5px 10px rgba(0, 0, 0, 0.15)',
    searchBar:
      '0px 1px 4px rgba(0, 0, 0, 0.2),    0px 0px 0px rgba(0, 0, 0, 0.15)'
  },
  fonts: {
    tiltWarp: 'Tilt Warp',
    redHatDisplay: 'Red Hat Display'
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#1E1E1E',
    text: '#FFFFFF',
    accent: '#104226',
    primary: '#483D8B',
    secondary: '#778899'
  },
  shadows: {
    activeButton:
      '0px 10px 20px rgba(0, 0, 0, 0.2),    0px 5px 10px rgba(0, 0, 0, 0.15)',
    searchBar:
      '0px 1px 4px rgba(0, 0, 0, 0.2),    0px 0px 0px rgba(0, 0, 0, 0.15)'
  },
  fonts: {
    tiltWarp: 'Tilt Warp',
    redHatDisplay: 'Red Hat Display'
  }
};
