import { TouchableOpacity, Text, Image } from "react-native";
import tw from "twrnc";

export default function ChatCard({ item }) {
  return (
    <TouchableOpacity>
      <Image
        style={tw`rounded-full h-16 w-16 mr-4`}
        source={{ uri: item.image }}
      />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}
