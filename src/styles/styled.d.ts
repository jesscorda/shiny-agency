// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    shadows: {
      activeButton: string;
      searchBar: string;
    };
    fonts: {
      tiltWarp: string;
      redHatDisplay: string;
    };
  }
}
