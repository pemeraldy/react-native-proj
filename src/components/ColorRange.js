import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorRange = ({ color, onIncrease, onDecrease, colorValue }) => {
  return (
    <View>
      <Text>
        {color} : {colorValue}
      </Text>
      <Text>Increase Rate : </Text>
      <Button title={`+ ${color}`} onPress={() => onIncrease()} />
      <Text></Text>
      <Button title={`- ${color}`} onPress={() => onDecrease()} />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorRange;
