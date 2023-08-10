import { View, Text } from "react-native";
import tw from "twrnc";

export default function MatchScreen() {
  return (
    <View style={[tw`h-full bg-rose-500 pt-20`, { opacity: 0.9 }]}>
      <Text>MatchScreen</Text>
    </View>
  );
}
