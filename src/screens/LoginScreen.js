import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        resizeMode="cover"
        style={tw`flex-1`}
        source={{
          uri: "https://gimlet.spotifycdn.com/hero/166bdc6f-488f-4a63-8b2b-c9d4eeeab9ad/fallback.jpg",
        }}
      >
        <TouchableOpacity
          style={tw`bg-white w-40 self-center mt-52 p-3 rounded-lg`}
        >
          <Text style={tw`text-center`}>Sign In</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
