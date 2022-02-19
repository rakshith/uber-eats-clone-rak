import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tw from "twrnc";
import AnimatedLottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "@firebase/firestore";
import { db } from "../firebase/firebase";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

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

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "orders"), orderBy("createdAt", "desc"), limit(1)),
        (snapshot) => {
          snapshot.docs.map((doc) => {
            setLastOrder(doc.data());
          });
        }
      ),
    [db]
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`m-2 items-center h-full`}>
        <AnimatedLottieView
          style={tw`h-30 items-center mb-4`}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />

        <Text>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={5}
          />
          <AnimatedLottieView
            style={tw`h-50 items-center`}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
