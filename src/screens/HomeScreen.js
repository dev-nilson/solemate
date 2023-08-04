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
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          renderCard={(card) => (
            <View key={card.id} style={tw`bg-white relative h-3/4 rounded-xl`}>
              <Image
                style={tw`absolute top-0 h-full w-full rounded-xl`}
                source={{ uri: card.image }}
              />
              <View
                style={tw`absolute bottom-0 bg-white w-full h-20 justify-between items-center flex-row px-6 py-3 rounded-b-xl`}
              >
                <Text>{card.name}</Text>
                <Text>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
