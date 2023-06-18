import { Center, Image, ScrollView, Text, VStack, View } from 'native-base';
import { MarvelFontWrapper } from '../../utils/FontLoad';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../interfaces/screen.enum';
import { RootStackParamList } from '../../interfaces/PropsRootStack';
import { useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { getSeriesCharacter } from '../../services/serie';

type Props = NativeStackScreenProps<RootStackParamList, Screen.CHARACTER>;

export function Character(): JSX.Element {
  const route = useRoute<Props['route']>();

  const { data } = useQuery(
    ['serie_character', route.params.id_origin],
    async () => {
      const response = await getSeriesCharacter(route.params.id_origin);
      return response.data;
    },
  );

  return (
    <MarvelFontWrapper>
      <VStack flex={1} padding={12} safeArea bg={'red.600'}>
        <Center>
          <Text
            fontSize="2xl"
            fontWeight={'black'}
            fontFamily={'Bebas-Regular'}
            textAlign={'center'}
            color={'white'}
            style={{
              textShadowColor: '#000000',
              textShadowOffset: { width: 3, height: 1 },
              textShadowRadius: 1,
            }}
          >
            {route.params?.name ?? 'Not found'}
          </Text>
          <Image
            resizeMethod="resize"
            source={{
              uri: route.params.imageURL,
              method: 'GET',
            }}
            alt={'image'}
            width={72}
            height={64}
            borderRadius="lg"
          />
          <Text
            fontSize="3xl"
            fontWeight={'black'}
            textBreakStrategy="simple"
            fontFamily={'Bebas-Regular'}
            marginTop={4}
            style={{
              textShadowColor: '#000000',
              textShadowOffset: { width: 3, height: 1 },
              textShadowRadius: 1,
            }}
          >
            Description
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            height={40}
            width={'full'}
            borderRadius={8}
          >
            <Text
              style={{
                textShadowColor: '#000000',
                textShadowOffset: { width: 3, height: 1 },
                textShadowRadius: 1,
              }}
              fontSize="2xl"
              fontWeight={'bold'}
              textBreakStrategy="simple"
              textAlign={'center'}
              fontFamily={'Bebas-Regular'}
            >
              {route.params?.description ?? 'Description not found'}
            </Text>
          </ScrollView>
          <Text
            marginTop={4}
            fontFamily={'Bebas-Regular'}
            fontSize="3xl"
            style={{
              textShadowColor: '#000000',
              textShadowOffset: { width: 3, height: 1 },
              textShadowRadius: 1,
            }}
          >
            Series
          </Text>
          <VStack marginTop={4} height={48} width={'full'}>
            <Center>
              {(data?.length ?? 0) > 0 && (
                <>
                  <ScrollView showsVerticalScrollIndicator={false} horizontal>
                    {data?.map((serie) => (
                      <View height={64} key={serie.id} paddingRight={4}>
                        <Center marginBottom={2}>
                          <Text
                            fontFamily={'Bebas-Regular'}
                            fontSize={'md'}
                            style={{
                              textShadowColor: 'blue',
                              textShadowOffset: { width: 3, height: 0.5 },
                              textShadowRadius: 5,
                            }}
                          >
                            {serie.title}
                          </Text>
                        </Center>
                        <Center>
                          <Image
                            resizeMethod="scale"
                            source={{
                              uri: serie.imageURL,
                              method: 'GET',
                            }}
                            alt={'image'}
                            width={'32'}
                            height={'40'}
                            borderRadius="lg"
                          />
                        </Center>
                      </View>
                    ))}
                  </ScrollView>
                </>
              )}

              {data?.length === 0 && (
                <Text
                  fontSize="2xl"
                  fontWeight={'black'}
                  textBreakStrategy="simple"
                  textAlign={'center'}
                  fontFamily={'Bebas-Regular'}
                >
                  Not found series for this character
                </Text>
              )}
            </Center>
          </VStack>
        </Center>
      </VStack>
    </MarvelFontWrapper>
  );
}
