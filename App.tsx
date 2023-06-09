import { NativeBaseProvider, extendTheme } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/features/home';
import { LogBox } from 'react-native';
import { Screen } from './src/interfaces/screen.enum';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Stack.Navigator
            initialRouteName={Screen.HOME}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={Screen.HOME} component={Home} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
