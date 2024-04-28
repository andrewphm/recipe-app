import { Box, HStack, Icon, Input } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';

export default function Search() {
  return (
    <Box bg="white" px={4} py="1" rounded="lg">
      <HStack alignItems="center">
        <Icon as={Ionicons} name="search" size="md" color="orange.500" />
        <Input
          borderWidth={0}
          fontSize={18}
          focusOutlineColor="white"
          bgFocus="white"
          placeholder="Search for recipes..."
          w="90%"
          _focus={{ borderColor: 'white', backgroundColor: 'white' }}
        />
      </HStack>
    </Box>
  );
}
