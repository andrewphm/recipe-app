import { View, Text, ScrollView, Box, Input, HStack } from 'native-base';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';

function GroceryListScreen() {
  const state = useSelector((state) => state.groceryList);
  const screenHeight = Dimensions.get('window').height;

  return (
    <Box flex={1} height="100%">
      <Text p="5" color={'orange.500'} bold fontSize="24">
        My Shopping List
      </Text>
      {state.length === 0 ? (
        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
          <Text color={'gray.500'} fontSize="16">
            Your shopping list is empty, add some items!
          </Text>
        </Box>
      ) : (
        state.map((item) => (
          <ScrollView key={item.id} p={2} my={2} bgColor={'light.100'} rounded="lg">
            <Text>{item.name}</Text>
          </ScrollView>
        ))
      )}
      <Box bgColor={'light.200'} p="2">
        <HStack space={2} alignItems={'center'}>
          <Input
            fontSize="16px"
            placeholder="Add an item..."
            bgColor={'light.100'}
            p={2}
            flex={1}
            rounded="lg"
            type="text"
          />
          <Box bgColor={'orange.500'} p={2} rounded="lg">
            <Text color={'white'}>Add</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

export default GroceryListScreen;
