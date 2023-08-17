import { FlatList, View, Text } from "react-native";
import { data } from "../utils/data";
import ChatCard from "./ChatCard";
import tw from "twrnc";

export default function ChatList() {
  return data.length > 0 ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatCard />}
    />
  ) : (
    <View style={tw`flex-1 items-center mt-6`}>
      <Text style={tw`text-xl font-semibold text-gray-400`}>No matches</Text>
    </View>
  );
}
