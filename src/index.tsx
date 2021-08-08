import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ContextProvider } from './contexts';
import { Routes } from './routes';

import colors from './colors';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
