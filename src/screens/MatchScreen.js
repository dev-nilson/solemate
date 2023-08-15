import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

export default function MatchScreen() {
  const navigation = useNavigation();

  return (
    <View style={[tw`h-full bg-rose-500 pt-20`, { opacity: 0.9 }]}>
      <Text style={tw`text-white text-center mt-5 text-lg`}>
        You and XXX have liked each other
      </Text>
      <View style={tw`flex-row justify-evenly mt-10`}>
        <Image
          style={tw`h-28 w-28 rounded-full border-white border-2`}
          source={{
            uri: "https://st4.depositphotos.com/9998432/25177/v/600/depositphotos_251778046-stock-illustration-person-gray-photo-placeholder-man.jpg",
          }}
        />
        <Image
          style={tw`h-28 w-28 rounded-full border-white border-2`}
          source={{
            uri: "https://st4.depositphotos.com/9998432/25177/v/600/depositphotos_251778046-stock-illustration-person-gray-photo-placeholder-man.jpg",
          }}
        />
      </View>
      <TouchableOpacity
        style={tw`bg-white m-10 p-3 rounded-full`}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={tw`text-center text-rose-500 font-bold text-lg`}>
          Send a Message
        </Text>
      </TouchableOpacity>
    </View>
  );
}
