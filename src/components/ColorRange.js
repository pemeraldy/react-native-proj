import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorRange = ({
  color,
  onIncrease,
  onDecrease,
  colorValue,
  increaseRate,
  changeIncRate,
}) => {
  return (
    <View>
      <Text>
        {color} : {colorValue}
      </Text>
      <Text>Increase Rate : {increaseRate}</Text>
      <Button title={`+ ${color}`} onPress={() => onIncrease()} />
      <Text></Text>
      <Button title={`- ${color}`} onPress={() => onDecrease()} />
      <Text></Text>
      <Button title=" Change Rate" onPress={() => changeIncRate()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorRange;
