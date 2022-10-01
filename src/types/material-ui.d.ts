/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypographyVariants from '@mui/material/styles/TypographyVariants';
import * as TypographyPropsVariantOverrides from '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body1_white: React.CSSProperties;
    body1_white_bold: React.CSSProperties;
    body2_bold: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body1_white?: React.CSSProperties;
    body1_white_bold?: React.CSSProperties;
    body2_bold?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
    body1_white: true;
    body1_white_bold: true;
    body2_bold: true;
    body3: true;
  }
}
