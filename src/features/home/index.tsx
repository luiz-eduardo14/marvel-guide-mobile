/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Center, FlatList, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { getCharactersPaginate } from '../../services/character';
import { CardCharacter } from './components/CardCharacter';
import { useInfiniteQuery } from 'react-query';
import { MarvelHeader } from './components/MarvelHeader';
import { MarvelFontWrapper } from '../../utils/FontLoad';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Screen } from '../../interfaces/screen.enum';
import { RootStackParamList } from '../../interfaces/PropsRootStack';

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

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <MarvelFontWrapper>
      <Center bg={'red.600'} px={4} flex={1} safeArea>
        <MarvelHeader />
        <Box flex={0.75}>
          <SafeAreaView>
            <FlatList
              horizontal={false}
              onEndReached={() => {
                if (hasNextPage && !isFetchingNextPage) {
                  fetchNextPage();
                }
              }}
              maxToRenderPerBatch={4}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={dataCharacters?.pages?.flatMap((value) => value.items)}
              keyExtractor={(item) => item.id_origin.toString()}
              removeClippedSubviews
              renderItem={({ item: character }) => (
                <CardCharacter
                  description={character.description}
                  imageURL={character.imageURL}
                  title={character.name}
                  key={character.id_origin}
                  onPress={() => {
                    navigate(Screen.CHARACTER, character);
                  }}
                />
              )}
            />
          </SafeAreaView>
        </Box>
      </Center>
    </MarvelFontWrapper>
  );
}
