import type { Theme } from "@mui/material/styles";

interface CustomPalette {
  basic: {
    black: string;
    white: string;
  };
  general: {
    main: string;
    icon: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette {
    custom: CustomPalette;
  }

  interface PaletteOptions {
    custom?: CustomPalette;
  }

  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    desktop: true;
    maxWidth: true;
  }
}

declare module "@mui/styles/defaultTheme" {
  // Required module augmentation for the legacy JSS styling API.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends Theme {}
}
