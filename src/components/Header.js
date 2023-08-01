import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Header() {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder-1.jpeg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
