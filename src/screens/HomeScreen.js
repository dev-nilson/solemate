import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <Text>App</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")}></Button>
    </SafeAreaView>
  );
}
