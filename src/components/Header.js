import { View, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

export default function Header() {
  return (
    <View style={tw`h-12 px-3 flex-row justify-between items-center`}>
      <TouchableOpacity>
        <Image
          style={tw`h-10 w-10 rounded-lg`}
          source={{
            uri: "https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder-1.jpeg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={tw`h-10 w-10 rounded-full`}
          source={require("../../assets/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="chat-bubble" />
      </TouchableOpacity>
    </View>
  );
}
