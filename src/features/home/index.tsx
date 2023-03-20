import { Box, Center } from 'native-base';
import { CardCharacter } from './components/CardCharacter';
import { CardCharacterProps } from './components/types/CardCharacter';

const mokiImageRedHulk =
  'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/523214eac3705.jpg';

const mokiImageSheHulk =
  'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/523214b8ea2cf.jpg';

const mokiImageSpiderMan =
  'http://i.annihil.us/u/prod/marvel/i/mg/3/50/531771b4e8c60.jpg';

const mokiCharacters: CardCharacterProps[] = [
  {
    description: 'is fury',
    image: {
      src: mokiImageRedHulk,
    },
    title: 'Red Hulk',
  },
  {
    description: 'is fury',
    image: {
      src: mokiImageSheHulk,
    },
    title: 'She Hulk',
  },
  {
    description: 'homecoming',
    image: {
      src: mokiImageSpiderMan,
    },
    title: 'Spider man(ultimate)',
  },
];

export default function Home() {
  return (
    <Center
      _dark={{ bg: 'red.600' }}
      _light={{ bg: 'blueGray.500' }}
      px={4}
      flex={1}
      safeArea
    >
      <Box flex={1}>
        {mokiCharacters.map((character, index) => (
          <CardCharacter
            description={character.description}
            image={character.image}
            title={character.title}
            key={index}
          />
        ))}
      </Box>
    </Center>
  );
}
