import { useFonts } from 'expo-font';
import { HStack, Spinner } from 'native-base';
import { ReactElement } from 'react';

export function MarvelFontWrapper({ children }: { children: ReactElement }) {
  const [isLoadFont] = useFonts({
    'Bebas-Regular': require('../assets/fonts/Bebas-Regular.ttf'),
  });
  if (!isLoadFont) {
    return (
      <HStack
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
        bg={'red.600'}
      >
        <Spinner color="white" />
      </HStack>
    );
  } else {
    return children;
  }
}
