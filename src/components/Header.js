import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={tw`h-16 px-3 flex-row justify-between items-center bg-[#ddd]`}>
      <TouchableOpacity onPress={() => navigation.navigate("Match")}>
        <Image
          style={tw`h-10 w-10 rounded-full`}
          source={{
            uri: "https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder-1.jpeg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
        <Image
          style={tw`h-10 w-10 rounded-full`}
          source={require("../../assets/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Icon name="chat-bubble" color={"#f43f5e"} />
      </TouchableOpacity>
    </View>
  );
}
