import { View, Text } from "react-native";
import Topbar from "../components/Topbar";

export default function MessageScreen() {
  return (
    <View>
      <Topbar title="Chat" showActions />
      <Text>MessageScreen</Text>
    </View>
  );
}
