import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const ViewCart = ({ navigation, restaurantName }) => {
  return (
    <View style={tw`flex-row absolute justify-center bottom-30 z-999`}>
      <View style={tw`flex-row justify-center w-full`}>
        <TouchableOpacity
          style={tw`bg-black items-center p-2 rounded-50 relative w-80`}
        >
          <Text style={tw`text-white text-lg`}>{restaurantName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;
