import { Text, TextInput, View } from "react-native";
import tw from "twrnc";
import Constants from "expo-constants";

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
      <Text style={tw`text-rose-500 p-4 font-bold`}>Step 1: Enter brand</Text>
      <TextInput style={tw`text-center text-lg pb-2`} placeholder="Brand" />
      <Text style={tw`text-rose-500 p-4 font-bold`}>Step 2: Enter model</Text>
      <TextInput style={tw`text-center text-lg pb-2`} placeholder="Model" />
      <Text style={tw`text-rose-500 p-4 font-bold`}>Step 3: Enter size</Text>
      <TextInput keyboardType="numeric" style={tw`text-center text-lg pb-2`} placeholder="Size" />
    </View>
  );
}
