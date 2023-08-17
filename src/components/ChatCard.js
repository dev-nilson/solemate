import { TouchableOpacity, Text, Image } from "react-native";
import tw from "twrnc";

export default function ChatCard({ item }) {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`}
    >
      <Image
        style={tw`rounded-full h-16 w-16 mr-4`}
        source={{ uri: item.image }}
      />
      <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
    </TouchableOpacity>
  );
}
