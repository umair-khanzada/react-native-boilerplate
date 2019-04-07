import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Navigator from './routes';
import theme from './styles/theme'

export default () => (
  <ThemeProvider theme={theme}>
    <Navigator />
  </ThemeProvider>
);
