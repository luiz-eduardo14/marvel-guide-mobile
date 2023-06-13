import {
  Center,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from 'native-base';
import { CardCharacterProps } from './types/CardCharacter';

export function CardCharacter({
  title,
  imageURL,
  onPress,
}: CardCharacterProps) {
  return (
    <Pressable onPress={onPress}>
      <VStack paddingBottom={4}>
        <Heading textAlign="center" paddingBottom={2} justifyContent={'center'}>
          <View>
            <Text
              fontSize="3xl"
              fontWeight={'black'}
              fontFamily={'Bebas-Regular'}
              color={'white'}
            >
              {title}
            </Text>
          </View>
        </Heading>
        <Center>
          <Image
            resizeMethod="resize"
            source={{
              uri: imageURL,
              method: 'GET',
            }}
            alt={'image'}
            width={64}
            height={48}
            borderRadius="lg"
          />
        </Center>
      </VStack>
    </Pressable>
  );
}
