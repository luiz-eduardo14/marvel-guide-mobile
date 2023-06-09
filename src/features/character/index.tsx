import { CompositeScreenProps } from '@react-navigation/native';
import { Center, Text, VStack } from 'native-base';
import { MarvelFontWrapper } from '../../utils/FontLoad';

export function Character({
  navigation,
  route,
}: CompositeScreenProps<any, any>) {
  return (
    <MarvelFontWrapper>
      <VStack flex={1} padding={'12'} safeArea bg={'red.600'}>
        <Center>
          <Text
            fontSize="5xl"
            fontWeight={'black'}
            fontFamily={'Bebas-Regular'}
            color={'white'}
          >
            Character
          </Text>
        </Center>
      </VStack>
    </MarvelFontWrapper>
  );
}
