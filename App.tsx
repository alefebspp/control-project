import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import {Routes} from './src/routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AuthContextProvider} from './src/contexts';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/theme/toastConfig';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <Toast config={toastConfig} />
    </>
  );
}

export default App;
