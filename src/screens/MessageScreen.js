import { SafeAreaView, Text } from "react-native";
import Constants from "expo-constants";
import Topbar from "../components/Topbar";

export default function MessageScreen() {
  return (
    <SafeAreaView
      style={{ marginTop: Constants.statusBarHeight + 10, flex: 1 }}
    >
      <Topbar title="Chat" showActions />
      <Text>MessageScreen</Text>
    </SafeAreaView>
  );
}
