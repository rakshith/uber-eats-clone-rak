import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "twrnc";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const SearchBar = ({ cityHandler }) => {
  return (
    <View style={tw`mt-5 flex-row`}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBmsV29GZbUN3DpvQDtMy-R8eVFIZfxQpo" }}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },

          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={tw`ml-3 mt-4`}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={tw`flex-row mr-4 mt-2 mb-2 bg-white rounded-full p-2 items-center `}
          >
            <AntDesign name="clockcircle" size={15} color="black" />
            <Text style={tw`ml-1`}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
