import { Text, ScrollView, Box, Input, HStack, Button, Icon } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { addToList, clearList, completeItem, removeFromList } from '../features/groceryListSlice';
import { useState } from 'react';
import { Ionicons } from 'react-native-vector-icons';
import GroceryItem from '../components/GroceryItem';

function GroceryListScreen() {
  const [input, setInput] = useState('');
  const state = useSelector((state) => state.groceryList);
  const dispatch = useDispatch();
  const handleAddToList = (item) => {
    dispatch(addToList(item));
  };
  const handleOnPress = (item) => {
    dispatch(completeItem(item.title));
  };
  const handleOnRemove = (item) => {
    dispatch(removeFromList(item.title));
  };

  return (
    <SafeAreaView flex={1}>
      <Box flex={1} flexGrow={1} justifyContent={'space-between'} bgColor={'light.100'}>
        <Box flex={1} p={5} flexGrow={1}>
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Text color={'orange.500'} bold fontSize="24">
              My Shopping List
            </Text>
            <Button
              rounded="full"
              onPress={() => {
                dispatch(clearList());
                alert('Shopping list cleared!');
              }}
              bgColor={'orange.500'}
              _text={{ color: 'white', fontWeight: 'bold' }}
            >
              Clear
            </Button>
          </HStack>
          {state.length === 0 ? (
            <Box flex={1} alignItems={'center'} justifyContent={'center'}>
              <Text color={'gray.500'} fontSize="16">
                Your shopping list is empty, add some items!
              </Text>
            </Box>
          ) : (
            <ScrollView p={2} my={1} bgColor={'light.100'} rounded="lg">
              {state.map((item, i) => (
                <GroceryItem
                  key={item.title}
                  item={item}
                  handleOnPress={handleOnPress}
                  handleOnRemove={handleOnRemove}
                />
              ))}
            </ScrollView>
          )}
        </Box>
        <Box bgColor={'light.200'} p="2">
          <HStack space={2} alignItems={'center'}>
            <Input
              fontSize="16px"
              placeholder="Add an item..."
              bgColor={'light.100'}
              p={2}
              flex={1}
              type="text"
              rounded="lg"
              value={input}
              onChange={(e) => {
                setInput(e.nativeEvent.text);
              }}
              onSubmitEditing={() => {
                handleAddToList(input);
                setInput('');
              }}
            />
            <Box bgColor={'orange.500'} p={2} rounded="lg">
              <Icon as={Ionicons} name="add" size="sm" color="white" />
            </Box>
          </HStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

export default GroceryListScreen;
