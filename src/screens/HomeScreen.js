import tw from "twrnc";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
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
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "green",
                },
              },
            },
          }}
          renderCard={(card) => (
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
          )}
        />
      </View>
    </SafeAreaView>
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
