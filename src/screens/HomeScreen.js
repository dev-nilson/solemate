import { SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight + 10 }}>
      <Header />
    </SafeAreaView>
  );
}
