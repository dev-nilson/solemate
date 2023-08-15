import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import tw from "twrnc";

export default function Form() {
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [size, setSize] = useState();

  const isIncomplete = !brand || !model || !size;

  return (
    <View>
      <View style={tw`mt-10`}>
        <Text style={tw`text-rose-500 p-4 font-bold`}>Step 1: Enter brand</Text>
        <TextInput
          style={tw`text-center text-lg pb-2`}
          placeholder="Brand"
          value={brand}
          onChange={(text) => setBrand(text)}
          maxLength={25}
        />
        <Text style={tw`text-rose-500 p-4 font-bold`}>Step 2: Enter model</Text>
        <TextInput
          style={tw`text-center text-lg pb-2`}
          placeholder="Model"
          value={model}
          onChange={(text) => setModel(text)}
          maxLength={25}
        />
        <Text style={tw`text-rose-500 p-4 font-bold`}>Step 3: Enter size</Text>
        <TextInput
          style={tw`text-center text-lg pb-2`}
          keyboardType="numeric"
          placeholder="Size"
          value={size}
          onChange={(text) => setSize(text)}
          maxLength={2}
        />
      </View>
      <TouchableOpacity
        disabled={isIncomplete}
        style={[
          tw`w-54 p-3 rounded-full absolute bottom-10 `,
          isIncomplete ? tw`bg-gray-400` : tw`bg-rose-500`,
        ]}
      >
        <Text style={tw`text-center text-white font-bold text-lg`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
