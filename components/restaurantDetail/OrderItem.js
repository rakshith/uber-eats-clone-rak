import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View
      style={[
        tw`flex-row justify-between p-5`,
        { borderBottomWidth: 1, borderBottomColor: "#999" },
      ]}
    >
      <Text style={tw`font-semibold text-xs`}>{title}</Text>
      <Text style={tw`opacity-50 text-xs`}>{price}</Text>
    </View>
  );
};

export default OrderItem;
