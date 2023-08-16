import { Text, SafeAreaView, View } from "react-native";
import tw from "twrnc";
import Topbar from "../components/Topbar";

export default function ChatScreen() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Topbar />
    </SafeAreaView>
  );
}
