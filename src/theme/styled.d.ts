import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      light: string;
      lightHover: string;
      lightActive: string;
      dark: string;
      darkHover: string;
      darkActive: string;
    };
    fonts: {
      garamound: string;
      roboto: string;
    };
    boxShadows: {
      bS1: string;
      bS2: string;
      active: string;
    };
  }
}
