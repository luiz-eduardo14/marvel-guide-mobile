/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Center, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { getCharactersPaginate } from '../../services/character';
import { CardCharacter } from './components/CardCharacter';
import { useInfiniteQuery } from 'react-query';
import { MarvelHeader } from './components/MarvelHeader';
import { MarvelFontWrapper } from '../../utils/FontLoad';

export default function Home() {
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

  return (
    <MarvelFontWrapper>
      <Center bg={'red.600'} px={4} flex={1} safeArea>
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
    </MarvelFontWrapper>
  );
}
