import { AspectRatio, Box, Image, Text, HStack, Icon } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';

export default function RecipeItem({ image, rating, title, cookTime, difficulty, author }) {
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
        <Box bgColor="white" position="absolute" right="3" top="2" p="2" rounded="full" shadow="lg">
          <Icon as={Ionicons} name="heart" size="sm" color="red.500" />
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
        <HStack space={2}>
          <HStack space={1} alignItems="center">
            <Icon as={Ionicons} name="time" size="sm" color="orange.500" />
            <Text>{cookTime}</Text>
          </HStack>
          <Text>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Text>
          <Text>By {author.name}</Text>
        </HStack>
      </Box>
    </Box>
  );
}
