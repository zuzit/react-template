import palette from './palette';

const header = {
  h1: {
    color: palette.text.primary,
    fontSize: '2.25rem',
    lineHeight: '1.17',
    '@media (max-width:600px)': {
      fontSize: '1.75rem',
      lineHeight: '1.21',
    },
  },
  h2: {
    color: palette.text.primary,
    fontSize: '1.75rem',
    lineHeight: '1.21',
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
      lineHeight: '1.25',
    },
  },
  h3: {
    color: palette.text.primary,
    fontSize: '1.5rem',
    lineHeight: '1.25',
    '@media (max-width:600px)': {
      fontSize: '1.25rem',
      lineHeight: '1.4',
    },
  },
  h4: {
    color: palette.text.primary,
    fontSize: '1.25rem',
    lineHeight: '1.4',
    '@media (max-width:600px)': {
      fontSize: '1.125rem',
      lineHeight: '1.44',
    },
  },
  h5: {
    color: palette.text.primary,
    fontSize: '1.125rem',
    lineHeight: '1.44',
    '@media (max-width:600px)': {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
  },
  h6: {
    color: palette.text.primary,
    fontSize: '1rem',
    lineHeight: '1.5',
  },
};

const body = {
  body1: {
    fontSize: '1rem',
    color: palette.text.secondary,
    lineHeight: '1.5',
  },
  body1_white: {
    fontSize: '1rem',
    color: '#fff',
    lineHeight: '1.5',
  },
  body1_white_bold: {
    fontSize: '1rem',
    color: '#fff',
    lineHeight: '1.5',
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '0.875rem',
    lineHeight: '1.43',
  },
  body2_bold: {
    color: palette.text.secondary,
    fontSize: '0.875rem',
    lineHeight: '1.43',
  },
  body3: {
    color: palette.text.secondary,
    fontSize: '0.75rem',
    lineHeight: '1.5',
  },
};

const typography = {
  fontSize: 16,
  htmlFontSize: 16,
  color: palette.text.primary,
  fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  ...header,
  ...body,
};

export default typography;
