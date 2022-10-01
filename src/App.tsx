import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import i18n from './i18n';
import theme from './assets/styles/customTheme';
import Home from './components/home';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </I18nextProvider>
);

export default App;
