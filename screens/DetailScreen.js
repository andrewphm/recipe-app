import { View, Text } from 'native-base';
import { SafeAreaView } from 'react-native';

export default function DetailScreen({ route }) {
  const recipe = route.params.recipe;
  return (
    <SafeAreaView>
      <View>
        <Text>Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
}
