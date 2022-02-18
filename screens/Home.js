import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeadeTabs from "../components/HeadeTabs";
import tw from "twrnc";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-gray-300 h-full`}>
      <View style={tw`bg-white p-4`}>
        <HeadeTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
};

export default Home;
