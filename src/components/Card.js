import { View, Text, Image, StyleSheet } from "react-native";
import tw from "twrnc";

export default function Card({ card }) {
  return (
    <View key={card.id} style={tw`bg-white relative h-3/4 rounded-xl`}>
      <Image
        style={tw`absolute top-0 h-full w-full rounded-xl`}
        source={{ uri: card.image }}
      />
      <View
        style={[
          tw`absolute bottom-0 bg-white w-full h-20 justify-between items-center flex-row px-6 py-3 rounded-b-xl`,
          styles.cardShadow,
        ]}
      >
        <Text style={tw`text-2xl font-bold`}>{card.name}</Text>
        <Text style={tw`text-xl font-semibold`}>{card.age}</Text>
      </View>
    </View>
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
