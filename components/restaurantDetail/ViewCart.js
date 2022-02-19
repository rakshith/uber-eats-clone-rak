import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { Modal } from "react-native";
import OrderItem from "./OrderItem";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((acc, item) => acc + item, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const modalContainer = tw`
    flex-1 justify-end bg-black bg-opacity-60 
  `;

  const modalCheckoutContainer = tw`
    bg-white p-4 h-100 border 
    `;

  const restaurantNameStyle = tw`
    text-center font-semibold text-sm mb-5
  `;

  const subtotalContainer = tw`
    flex-row justify-between mt-2
  `;

  const subtotalText = tw`
    text-left font-semibold text-xs mb-5
  `;

  const checkoutModalContent = () => {
    return (
      <>
        <View style={modalContainer}>
          <View style={modalCheckoutContainer}>
            <Text style={restaurantNameStyle}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={subtotalContainer}>
              <Text style={subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={tw`flex-row justify-center`}>
              <TouchableOpacity
                style={tw` mt-2 bg-black justify-center items-center rounded-12 w-60 py-3`}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={tw`text-white  items-center font-semibold text-sm`}
                >
                  Checkout
                </Text>
                <Text style={tw`absolute text-white text-xs pl-2 right-4`}>
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={tw`flex-row absolute justify-center bottom-50 z-999`}>
          <View style={tw`flex-row justify-center w-full`}>
            <TouchableOpacity
              style={tw`flex-row bg-black justify-end items-center p-2 rounded-50 relative w-60`}
              onPress={() => setModalVisible(true)}
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
