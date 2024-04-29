import { Text, Box, AspectRatio, Image, HStack, Icon, VStack, Divider, Button } from 'native-base';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { addRecipeToList } from '../features/groceryListSlice';

export default function DetailScreen({ route }) {
  const recipe = route.params.recipe;
  const {
    image,
    title,
    rating,
    cookTime,
    ingredients,
    steps,
    difficulty,
    author,
    Cuisine,
    servings,
  } = recipe;
  const dispatch = useDispatch();

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <AspectRatio ratio={16 / 9}>
          <Image source={{ uri: image }} alt={title} />
        </AspectRatio>
        <Box
          height="100%"
          p={5}
          bgColor={'white'}
          roundedTop="3xl"
          position={'relative'}
          bottom={5}
          shadow={'md'}
        >
          <HStack space={2} color={'black'} justifyContent="space-between">
            <Text fontWeight={'semibold'} fontSize={22}>
              {title}
            </Text>
            <HStack space={1} alignItems={'center'}>
              <Icon as={Ionicons} name="star" size="md" color="yellow.500" />
              <Text fontWeight={'medium'} color={'gray.600'} fontSize={16}>
                {rating}
              </Text>
            </HStack>
          </HStack>
          <Box py="2">
            <Text fontWeight="semibold" fontSize="17px">
              Recipe by
            </Text>
            <HStack space={2} alignItems="center">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
                }}
                alt={author.name}
                size={12}
                rounded="full"
                borderColor="gray.200"
                borderWidth={1}
              />
              <VStack>
                <Text fontWeight="semibold">{author.name}</Text>
                <Text color="gray.600">Chef</Text>
              </VStack>
            </HStack>
          </Box>
          <Box py="2">
            <HStack space={3}>
              <Box flex={1} borderColor={'gray.200'} borderWidth={1} p="2" shadow={1} rounded="lg">
                <HStack space={3} alignItems="center">
                  <Box padding={2} rounded={'full'} bgColor={'gray.100'}>
                    <Icon as={Ionicons} name="time-outline" size="md" color="orange.500" />
                  </Box>
                  <VStack alignItems="start">
                    <Text color="gray.500">Cooking time</Text>
                    <Text fontWeight="semibold" color="orange.500">
                      {cookTime}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <Box flex={1} borderColor={'gray.200'} borderWidth={1} p="2" shadow={1} rounded="lg">
                <HStack space={3} alignItems="center">
                  <Box padding={2} rounded={'full'} bgColor={'gray.100'}>
                    <Icon as={Ionicons} name="restaurant-outline" size="md" color="orange.500" />
                  </Box>
                  <VStack alignItems="start">
                    <Text color="gray.500">Cuisine</Text>
                    <Text fontWeight="semibold" color="orange.500">
                      {Cuisine}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Divider my="2" />
          <Box pt="2">
            <HStack space={3} justifyContent={'space-between'}>
              <HStack space={2} alignItems="center">
                <Icon as={Ionicons} name="reader" size="md" color="orange.500" />
                <Text fontWeight="semibold" fontSize="18px">
                  Ingredients
                </Text>
              </HStack>
              <Text fontWeight="semibold" color="gray.500">
                {servings} servings
              </Text>
            </HStack>
            <VStack space={2}>
              {ingredients.map((ingredient, index) => (
                <HStack key={index} space={2} alignItems={'center'}>
                  <Icon as={Ionicons} name="ellipse" size="2" color="orange.400" ml="1.5" />
                  <Text>{ingredient}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
          <Box py="3">
            <HStack space={2} alignItems="center">
              <Icon as={Ionicons} name="footsteps" size="md" color="orange.500" />
              <Text fontWeight="semibold" fontSize="18px">
                Instructions
              </Text>
            </HStack>
            <VStack space={2}>
              {steps.map((step, index) => (
                <HStack key={index} space={2} alignItems="start" ml={1.5}>
                  <Text>{index + 1}.</Text>
                  <Text>{step}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
          <Button
            bgColor="orange.500"
            _text={{
              color: 'white',
              fontWeight: 'bold',
            }}
            onPress={() => {
              alert('Added to Grocery List');
              dispatch(addRecipeToList(recipe));
            }}
          >
            Add to Grocery List
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
}
