/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Center, HStack, ScrollView, Spinner } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { getCharactersPaginate } from '../../services/character';
import { useFonts } from 'expo-font';
import { CardCharacter } from './components/CardCharacter';
import * as SplashScreen from 'expo-splash-screen';
import { useInfiniteQuery } from 'react-query';
import { MarvelHeader } from './components/MarvelHeader';

export default function Home() {
  const [isLoadFont] = useFonts({
    'Bebas-Regular': require('../../assets/fonts/Bebas-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (isLoadFont) {
      await SplashScreen.hideAsync();
    }
  }, [isLoadFont]);

  const paginateCharacters = useCallback(async (page: number) => {
    const response = await getCharactersPaginate(page);
    return response.data;
  }, []);

  const {
    data: dataCharacters,
    hasNextPage = false,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => paginateCharacters(pageParam),
    queryKey: ['characters'],
    getNextPageParam: (lastPage) => (lastPage?.meta?.currentPage ?? 0) + 1,
  });

  if (!isLoadFont) {
    return (
      <HStack
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.8,
        }}
        bg={'red.600'}
      >
        <Spinner color="white" />
      </HStack>
    );
  }

  return (
    <Center bg={'red.600'} px={4} flex={1} safeArea onLayout={onLayoutRootView}>
      <MarvelHeader />
      <Box flex={0.75}>
        <SafeAreaView>
          <ScrollView
            onMomentumScrollEnd={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {dataCharacters?.pages
              ?.flatMap((value) => value.items)
              .map((character) => (
                <CardCharacter
                  description={character.description}
                  imageURL={character.imageURL}
                  title={character.name}
                  key={character.id_origin}
                />
              ))}
          </ScrollView>
        </SafeAreaView>
      </Box>
    </Center>
  );
}
