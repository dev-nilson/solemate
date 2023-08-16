import { SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Topbar from "../components/Topbar";

export default function ChatScreen() {
  return (
    <SafeAreaView
      style={{ marginTop: Constants.statusBarHeight + 10, flex: 1 }}
    >
      <Topbar title={"Chat"} />
    </SafeAreaView>
  );
}
