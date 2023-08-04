import tw from "twrnc";
import { SafeAreaView, View, Text, Image } from "react-native";
import { data } from "../utils/data";
import Constants from "expo-constants";
import Swiper from "react-native-deck-swiper";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ marginTop: Constants.statusBarHeight + 10, flex: 1 }}
    >
      <Header />
      <View style={tw`flex-1`}>
        <Swiper
          backgroundColor="#ddd"
          cards={data}
          renderCard={(card) => (
            <View key={card.id} style={tw`bg-white relative h-3/4 rounded-xl`}>
              <Image style={tw`absolute top-0 h-full w-full rounded-xl`} source={{ uri: card.image }} />
              <Text>{card.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
