import { Text, View } from "react-native";
import tw from "twrnc";
import Constants from "expo-constants";

export default function ModalScreen() {
  return (
    <View style={tw`flex-1 items-center`}>
      <Text
        style={tw`text-xl text-gray-500 font-bold mt-[${
          Constants.statusBarHeight + 10
        }]`}
      >
        Welcome!
      </Text>
    </View>
  );
}
