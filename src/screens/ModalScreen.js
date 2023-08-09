import { Text, TextInput, View } from "react-native";
import tw from "twrnc";
import Constants from "expo-constants";

export default function ModalScreen() {
  return (
    <View style={tw`flex-1 items-center`}>
      <Text
        style={tw`text-2xl text-gray-500 font-bold mt-[${
          Constants.statusBarHeight + 10
        }]`}
      >
        Welcome!
      </Text>
      <Text style={tw`text-rose-500 p-4 font-bold`}>
        Step 1: Upload a picture
      </Text>
      <TextInput
        style={tw`text-center text-lg pb-2`}
        placeholder="Image URL"
      />
    </View>
  );
}
