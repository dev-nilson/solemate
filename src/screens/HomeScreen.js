import { Button, Text, View } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>App</Text>
      <Button title="Click me!"></Button>
    </View>
  );
}
