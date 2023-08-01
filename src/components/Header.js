import { View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

export default function Header() {
  return (
    <View> 
      <TouchableOpacity>
        <Image
          style={tw`h-10 w-10 rounded-full`}
          source={{
            uri: "https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder-1.jpeg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
