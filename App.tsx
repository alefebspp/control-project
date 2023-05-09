import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import {Home} from './src/screens';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
