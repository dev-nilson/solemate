import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight + 10 }}>
      <Header />
      <Button title="Chat" onPress={() => navigation.navigate("Chat")}></Button>
    </SafeAreaView>
  );
}
