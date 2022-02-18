import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const HeadeTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={tw`flex-row justify-center`}>
      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeadeTabs;

const HeaderButton = ({
  title,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => (
  <TouchableOpacity
    style={tw`bg-${
      activeTab === title ? "black" : "white"
    } py-1 px-4 rounded-8`}
    onPress={() => setActiveTab(title)}
  >
    <Text
      style={tw`text-${
        activeTab === title ? "white" : "black"
      } text-sm font-black`}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
