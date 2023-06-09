import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { Screen } from '../interfaces/screen.enum';
import Home from '../features/home';
import { Character } from '../features/character';

export function Routes({ theme }: { theme: any }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator
          initialRouteName={Screen.HOME}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={Screen.HOME} component={Home} />
          <Stack.Screen name={Screen.CHARACTER} component={Character} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
