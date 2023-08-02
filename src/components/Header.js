import { View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";

export default function Header() {
  return (
    <View style={tw`bg-green-200 flex-row justify-between`}>
      <TouchableOpacity>
        <Image
          style={tw`h-10 w-10 rounded-full`}
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
        <Icon name="rowing" />
      </TouchableOpacity>
    </View>
  );
}
