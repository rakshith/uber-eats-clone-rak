import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
const BottomTabs = () => {
  return (
    <View style={tw`flex-row m-2 mx-6 justify-between`}>
      <Icon name="home" color="black" text="Home" />
      <Icon name="search" color="black" text="Browse" />
      <Icon name="shopping-bag" color="black" text="Grocery" />
      <Icon name="receipt" color="black" text="Orders" />
      <Icon name="user" color="black" text="Account" />
    </View>
  );
};

export default BottomTabs;

const Icon = ({ name, text, color }) => (
  <TouchableOpacity>
    <View style={tw`items-center`}>
      <FontAwesome5 name={name} size={24} color={color} style={tw`mb-1 `} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
