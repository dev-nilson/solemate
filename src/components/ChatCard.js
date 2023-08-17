import { TouchableOpacity, Text, Image } from "react-native";

export default function ChatCard({ item }) {
  return (
    <TouchableOpacity>
      <Image source={{ uri: item.image }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}
