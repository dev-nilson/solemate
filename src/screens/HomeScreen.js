import { useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { data } from "../utils/data";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import Constants from "expo-constants";
import Swiper from "react-native-deck-swiper";
import Header from "../components/Header";

export default function HomeScreen() {
  const swipeRef = useRef(null);

  return (
    <SafeAreaView
      style={{ marginTop: Constants.statusBarHeight + 10, flex: 1 }}
    >
      <Header />
      <View style={tw`flex-1`}>
        <Swiper
          ref={swipeRef}
          backgroundColor="#ddd"
          cards={data}
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          onSwipedLeft={() => console.log("LEFT")}
          onSwipedRight={() => console.log("RIGHT")}
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
      <View style={tw`flex flex-row justify-evenly bg-[#ddd]`}>
        <TouchableOpacity style={tw`items-center justify-center rounded-full w-20 h-20 bg-red-200`}>
          <Icon name="clear" size={36} color={"#7f1d1d"}/>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center justify-center rounded-full w-20 h-20 bg-green-200`}> 
          <Icon name="favorite" size={36} color={"#14532d"} />
        </TouchableOpacity>
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
