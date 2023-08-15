import { useRef } from "react";
import { SafeAreaView, View } from "react-native";
import { data } from "../utils/data";
import tw from "twrnc";
import Constants from "expo-constants";
import Swiper from "react-native-deck-swiper";
import Header from "../components/Header";
import Controls from "../components/Controls";
import Card from "../components/Card";

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
          renderCard={(card) => <Card card={card} />}
        />
      </View>
      <Controls
        swipeLeft={() => swipeRef.current.swipeLeft()}
        swipeRight={() => swipeRef.current.swipeRight()}
      />
    </SafeAreaView>
  );
}
