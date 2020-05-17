import React from "react";
import { View, Text, Button } from "react-native";
import ColorComponent from "../components/ColorComponent";

const ColorScreen = () => {
  return (
    <View>
      <ColorComponent color="Red" />
      <ColorComponent color="Blue" />
      <ColorComponent color="Green" />
    </View>
  );
};

export default ColorScreen;
