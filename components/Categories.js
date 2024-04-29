import { Box, Center, HStack, Image, ScrollView, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

export default function Categories() {
  const categories = [
    {
      title: 'Breakfast',
      image:
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Lunch',
      image:
        'https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Dinner',
      image:
        'https://images.unsplash.com/photo-1535473895227-bdecb20fb157?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Dessert',
      image:
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Italian',
      image:
        'https://images.unsplash.com/photo-1616299915952-04c803388e5f?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Japanese',
      image:
        'https://images.unsplash.com/photo-1602273660127-a0000560a4c1?q=80&w=2385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Mexican',
      image:
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <Box mb="5">
      <HStack space={2} alignItems="center" justifyContent={'space-between'} mb="2">
        <Text fontSize="xl" fontWeight="bold">
          Categories
        </Text>
        <Text fontWeight={'semibold'} color="orange.500">
          See all
        </Text>
      </HStack>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity key={category}>
            <Box
              bgColor="light.100"
              rounded="full"
              borderColor="light.200"
              height="10"
              width="100px"
              overflow={'hidden'}
              postion="relative"
              mr="2"
            >
              <View
                bgColor={'rgba(0,0,0,0.35)'}
                position="absolute"
                height="10"
                width="100px"
                top="0"
                left="0"
                zIndex={90}
              ></View>
              <Image
                style={{}}
                source={{ uri: category.image }}
                alt={category.title}
                size="xl"
                resizeMode="cover"
                position="absolute"
              />
              <Center position="absolute" height="10" width="100px" zIndex={100}>
                <Text color="white" fontWeight="bold">
                  {category.title}
                </Text>
              </Center>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
}
