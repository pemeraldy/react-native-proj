import React from "react";
import { View, Text, Button, InputAccessoryView } from "react-native";

const ColorComponent = ({ color }) => {
  return (
    <View>
      <Text>Red</Text>
      <Button title={`Increase color ${color}`} />
      <Text></Text>
      <Button title={`Decrease color ${color}`} />
    </View>
  );
};

export default ColorComponent;
