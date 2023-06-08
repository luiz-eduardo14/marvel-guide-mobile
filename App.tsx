import { NativeBaseProvider, extendTheme } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/features/home';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time']);

// Define the config
const theme = extendTheme({
  colors: {
    red: {
      600: '#f0141e',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Home />
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
