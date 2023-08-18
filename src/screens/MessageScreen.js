import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import Constants from "expo-constants";
import Topbar from "../components/Topbar";

export default function MessageScreen(props) {
  const { params } = useRoute();
  const { item } = params;

  return (
    <SafeAreaView
      style={{ marginTop: Constants.statusBarHeight + 10, flex: 1 }}
    >
      <Topbar title={item.name} showActions />
      <Text>MessageScreen</Text>
    </SafeAreaView>
  );
}
