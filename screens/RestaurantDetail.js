import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItems";

const RestaurantDetail = ({ route }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={tw`mt-2`} />
      <MenuItem />
    </View>
  );
};

export default RestaurantDetail;
