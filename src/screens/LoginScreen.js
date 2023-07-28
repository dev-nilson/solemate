import { ImageBackground, Text, View } from "react-native";
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
        
      </ImageBackground>
    </View>
  );
}
