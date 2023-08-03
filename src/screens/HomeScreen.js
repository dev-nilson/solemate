import { SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";
import Swiper from "react-native-deck-swiper";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight + 10 }}>
      <Header />
      <Swiper />
    </SafeAreaView>
  );
}
