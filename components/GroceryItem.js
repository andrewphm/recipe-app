import { Text, ScrollView, Box, Input, HStack, Button, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default GroceryItem = ({ item, handleOnPress, handleOnRemove }) => {
  return (
    <TouchableOpacity
      p={2}
      key={item.name}
      onPress={() => {
        handleOnPress(item);
      }}
    >
      <HStack
        space={2}
        alignItems={'center'}
        p={2}
        bgColor={item.completed ? 'light.200' : 'light.100'}
        rounded="lg"
        borderColor={'light.200'}
        borderWidth="1"
        shadow="1"
        my={1}
      >
        <Icon
          as={Ionicons}
          name={item.completed ? 'ellipse' : 'ellipse-outline'}
          size="sm"
          color="orange.500"
        />
        <Text flex={1}>{item.title}</Text>
        <Icon
          as={Ionicons}
          name="close"
          size="sm"
          color="red.500"
          onPress={() => {
            handleOnRemove(item);
          }}
        />
      </HStack>
    </TouchableOpacity>
  );
};
