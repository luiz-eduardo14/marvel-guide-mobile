import { Heading, Image, VStack } from 'native-base';
import { CardCharacterProps } from './types/CardCharacter';

export function CardCharacter({
  title,
  description,
  image,
}: CardCharacterProps) {
  return (
    <VStack
      borderRadius="2xl"
      flex={0.29}
      width="96"
      bg="red.700"
      marginTop={2}
    >
      <Heading fontWeight={'extrabold'} fontSize="2xl" textAlign="center">
        {title}
      </Heading>
      <Image
        resizeMethod="resize"
        source={{
          uri: image.src,
          method: 'GET',
        }}
        alt={title}
        size="65%"
        marginLeft="auto"
        marginRight="auto"
        borderRadius="lg"
      />
    </VStack>
  );
}
