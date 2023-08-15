import { Text, View } from "react-native";
import tw from "twrnc";
import Constants from "expo-constants";
import Form from "../components/Form";

export default function ModalScreen() {
  return (
    <View style={tw`flex-1 items-center`}>
      <Text
        style={tw`text-2xl text-gray-800 font-bold mt-[${
          Constants.statusBarHeight + 10
        }]`}
      >
        Welcome!
      </Text>
      <Form />
    </View>
  );
}
