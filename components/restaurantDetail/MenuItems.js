import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const menuItemStyle = tw`flex-row justify-between mx-4 mt-8`;

const dividerStyle = tw`mx-4`;

const MenuItems = ({ foods, restaurantName, hideCheckbox, marginLeft }) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider width={0.5} orientation="vertical" style={dividerStyle} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const foodInfoStyle = tw`flex w-60 justify-evenly`;
const titleStyle = tw`text-lg font-semibold`;

const FoodInfo = ({ food }) => (
  <View style={foodInfoStyle}>
    <Text style={titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const foodImageStyle = (marginLeft) =>
  tw`w-25 h-25 mb-4 rounded-2 ${marginLeft ? `ml-${marginLeft}` : ""}`;

const FoodImage = ({ food, marginLeft }) => (
  <View>
    <Image style={foodImageStyle(marginLeft)} source={{ uri: food.image }} />
  </View>
);
