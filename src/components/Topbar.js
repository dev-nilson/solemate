import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

export default function Topbar({ title }) {
  return (
    <View style={tw`h-16 px-3 flex-row justify-between items-center`}>
      <View>
        <TouchableOpacity>
          <Icon name="arrow-back" color={"#555"} size={36} />
        </TouchableOpacity>
        <Text>{title}</Text>
      </View>
    </View>
  );
}
