import { View, Text } from "react-native";
import tw from "twrnc";

export default function Topbar({ title }) {
  return (
    <View style={tw`h-16 px-3 flex-row justify-between items-center`}>
      <Text>{title}</Text>
    </View>
  );
}
