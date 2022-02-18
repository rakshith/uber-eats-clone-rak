import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";

const ViewCart = ({ navigation, restaurantName }) => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((acc, item) => acc + item, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View style={tw`flex-row absolute justify-center bottom-30 z-999`}>
          <View style={tw`flex-row justify-center w-full`}>
            <TouchableOpacity
              style={tw`flex-row bg-black justify-end items-center p-2 rounded-50 relative w-80`}
            >
              <Text style={tw`text-white text-lg mr-4`}>View Cart</Text>
              <Text style={tw`text-white text-lg mr-2`}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
