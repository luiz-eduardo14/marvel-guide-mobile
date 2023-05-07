import React from 'react';
import {
  NativeBaseProvider,
  extendTheme,
  Box,
  HStack,
  Center,
} from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/features/home';
import MarvelIcon from './src/icon/MarvelIcon';

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
          <Box flex={1} flexDirection="column">
            <HStack safeArea bg="red.600" flex={0.2}>
              <Box width="100%">
                <Center
                  justifyContent="center"
                  alignItems="center"
                  marginLeft="auto"
                  flexDirection="row"
                  width="100%"
                  marginBottom={0}
                >
                  <MarvelIcon size={180} />
                </Center>
              </Box>
            </HStack>
            <Home />
          </Box>
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
