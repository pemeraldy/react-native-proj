import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import ColorRange from "../components/ColorRange";

const ColorRangeScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [increaseRate, setIncreaseRate] = useState(0);

  const handleIncrease = () => {
    setIncreaseRate(increaseRate + 1);
  };

  const COLOR_INCREMENT = 10;

  const setColor = (color, changeRate) => {
    switch (color) {
      case "red":
        red + changeRate > 255 || red + changeRate < 0
          ? null
          : setRed(red + changeRate);
        return;
      case "blue":
        blue + changeRate > 255 || blue + changeRate < 0
          ? null
          : setBlue(blue + changeRate);
        return;
      case "green":
        green + changeRate > 255 || green + changeRate < 0
          ? ""
          : setGreen(green + changeRate);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <Text>Increase Rate</Text>
      <View
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: 100,
          height: 100,
        }}
      />
      <ColorRange
        color="red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        colorValue={red}
        increaseRate={increaseRate}
        changeIncRate={() => handleIncrease()}
      />

      <ColorRange
        color="blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        colorValue={blue}
        increaseRate={increaseRate}
      />

      <ColorRange
        color="green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        colorValue={green}
        increaseRate={increaseRate}
      />
    </View>
  );
};

export default ColorRangeScreen;
