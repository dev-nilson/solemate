import { FlatList, View, Text } from "react-native";
import { data } from "../utils/data";
import tw from "twrnc";

export default function ChatList() {
  return data.length > 0 ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  ) : (
    <View></View>
  );
}
