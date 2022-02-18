import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const props = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://www.inquirer.com/resizer/lcgslm42PfXfWtibEmsuvv9DVzk=/0x0:2938x1960/760x507/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/X5OWNSGUDZBNZBOYH277R5MZMY.jpg",
  reviews: "1500",
  price: "$$",
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={tw`w-full h-50`} />
);

const RestaurantTitle = ({ name }) => (
  <Text style={tw`text-2xl font-semibold mt-2 mx-4`}>{name}</Text>
);

const RestaurantDescription = ({ description }) => (
  <Text style={tw`mx-4 text-sm`}>{description}</Text>
);
