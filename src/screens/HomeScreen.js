import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>App</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")}></Button>
    </View>
  );
}
