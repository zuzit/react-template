import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../logo.svg';
import '../App.css';

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('common:title')}</p>
      </header>
    </div>
  );
};

export default Home;
