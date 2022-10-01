import palette from './palette';

const components = {
  MuiLink: {
    styleOverrides: {
      root: {
        color: palette.primary.main,
        '&:hover': {
          color: palette.primary.light,
        },
        '&:active': {
          color: palette.secondary.main,
        },
      },
    },
  },
};

export default components;
