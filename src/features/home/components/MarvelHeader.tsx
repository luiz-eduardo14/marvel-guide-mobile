import { Box, Center, HStack } from 'native-base';
import MarvelIcon from '../../../icon/MarvelIcon';

export function MarvelHeader() {
  return (
    <HStack safeArea bg="red.600" flex={0.2}>
      <Box width="100%">
        <Center>
          <MarvelIcon size={48} />
        </Center>
      </Box>
    </HStack>
  );
}
