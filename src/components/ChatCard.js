import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import tw from "twrnc";

export default function ChatCard({ item }) {
  return (
    <TouchableOpacity
      style={[
        tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`,
        styles.cardShadow,
      ]}
    >
      <Image
        style={tw`rounded-full h-16 w-16 mr-4`}
        source={{ uri: item.image }}
      />
      <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
    elevation: 2,
  },
});
