import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export const localRestaurants = [
  {
    id: 123,
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    id: 165,
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    id: 213,
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

const RestaurantItems = ({ navigation, restaurantData, ...props }) => {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={tw`bg-white mt-2 p-4`}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestaurantItems;

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={tw`h-50 w-full`}
    />
    <TouchableOpacity style={[tw`absolute`, { right: 20, top: 20 }]}>
      <Ionicons name="md-heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View style={tw`flex-row items-center justify-between m-2`}>
    <View style={tw``}>
      <Text style={tw`text-sm font-black`}>{name}</Text>
      <Text style={tw`text-sm text-gray-600`}>30-45 Min</Text>
    </View>
    <View
      style={tw`bg-gray-200 rounded-full h-8 w-8 items-center justify-center`}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
