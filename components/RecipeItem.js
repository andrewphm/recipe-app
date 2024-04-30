import { AspectRatio, Box, Image, Text, HStack, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../features/favouritesSlice';
import { useDispatch } from 'react-redux';

export default function RecipeItem({ recipe }) {
  const { title, image, rating, cookTime, difficulty, author } = recipe;
  const favourites = useSelector((state) => state.favourites);
  const favouritesTitles = favourites.map((recipe) => recipe.title);
  const dispatch = useDispatch();
  const handleFavouritePress = (recipe) => {
    if (favouritesTitles.includes(recipe.title)) {
      dispatch(removeFromFavourites(recipe.title));
    } else {
      dispatch(addToFavourites(recipe));
    }
  };
  return (
    <Box>
      <Box roundedTop="3xl" overflow={'hidden'}>
        <AspectRatio ratio={16 / 9}>
          <Image source={{ uri: image }} alt={title} />
        </AspectRatio>
        <Box
          bgColor="white"
          position="absolute"
          left="3"
          top="2"
          px="3"
          py="1"
          rounded="full"
          shadow="lg"
        >
          <HStack space={1} alignItems={'center'}>
            <Icon as={Ionicons} name="star" size="sm" color="yellow.500" />
            <Text bold>{rating} rating</Text>
          </HStack>
        </Box>
        <Box zIndex={100} position="absolute" right="3" top="2">
          <TouchableOpacity
            onPress={() => {
              handleFavouritePress(recipe);
            }}
          >
            <Box p="2" rounded="full" shadow="lg" bgColor="white">
              <Icon
                as={Ionicons}
                name="heart"
                size="sm"
                color={favouritesTitles.includes(title) ? 'red.500' : 'gray.400'}
              />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <Box
        rounded="3xl"
        position="relative"
        w="100%"
        bottom={6}
        color={'black'}
        bgColor={'light.200'}
        px={4}
        py={3}
      >
        <Text fontSize={15} bold>
          {title}
        </Text>
        <HStack space={2} alignItems={'center'}>
          <HStack space={1} alignItems="center">
            <Icon as={Ionicons} name="time" size="sm" color="orange.500" />
            <Text>{cookTime}</Text>
          </HStack>
          <Icon as={Ionicons} name="ellipse" size="2" color="gray.400" />
          <Text>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Text>
          <Icon as={Ionicons} name="ellipse" size="2" color="gray.400" />
          <Text>By {author.name}</Text>
        </HStack>
      </Box>
    </Box>
  );
}
