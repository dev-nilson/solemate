import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
