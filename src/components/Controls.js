import { View, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

export default function Controls({ swipeLeft, swipeRight }) {
  return (
    <View style={tw`flex flex-row justify-evenly bg-[#ddd] pb-6`}>
      <TouchableOpacity
        onPress={swipeLeft}
        style={tw`items-center justify-center rounded-full w-20 h-20 bg-red-200`}
      >
        <Icon name="clear" size={42} color={"#7f1d1d"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={swipeRight}
        style={tw`items-center justify-center rounded-full w-20 h-20 bg-green-200`}
      >
        <Icon name="favorite" size={42} color={"#14532d"} />
      </TouchableOpacity>
    </View>
  );
}
