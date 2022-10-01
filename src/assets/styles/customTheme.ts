import { createTheme } from '@mui/material/styles';
import { defaultTheme } from 'react-admin';
import components from './components';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  ...defaultTheme,
  palette,
  components,
  typography,
});

export default theme;
