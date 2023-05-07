import { Heading, Image, Text, VStack, View } from 'native-base';
import { CardCharacterProps } from './types/CardCharacter';

export function CardCharacter({
  title,
  description,
  imageURL,
}: CardCharacterProps) {
  return (
    <VStack borderRadius="2xl" width="96" paddingBottom={4}>
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
      <Image
        resizeMethod="resize"
        source={{
          uri: imageURL,
          method: 'GET',
        }}
        alt={'image'}
        width={'72'}
        height={'48'}
        marginLeft="auto"
        marginRight="auto"
        borderRadius="lg"
      />
    </VStack>
  );
}
