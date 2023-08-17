import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

export default function Topbar({ title, showActions }) {
  const navigation = useNavigation();

  return (
    <View style={tw`h-16 px-3 flex-row justify-between items-center`}>
      <View style={tw`flex flex-row items-center gap-3`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color={"#000"} size={36} />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold`}>{title}</Text>
      </View>
      {showActions && (
        <View>
          <TouchableOpacity>
            <Icon name="phone" color={"#000"} size={36} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
