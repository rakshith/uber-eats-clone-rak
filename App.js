import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestaurantDetail from "./screens/RestaurantDetail";
import Home from "./screens/Home";
import RootNavigation from "./navigation/navigation";

export default function App() {
  return <RootNavigation />;
}
