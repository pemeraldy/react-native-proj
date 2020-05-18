import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import ColorRange from "../components/ColorRange";

const ColorRangeScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [increaseRate, setIncreaseRate] = useState(0);

  const consoleColor = (color) => {
    console.log(color);
  };
  const handleIncrease = () => {
    setIncreaseRate(increaseRate + 1);
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
        onIncrease={() => (red < 255 ? setRed(red + 5) : "")}
        onDecrease={() => (red > 0 ? setRed(red - 5) : "")}
        colorValue={red}
        consoleIt={() => consoleColor(red)}
        increaseRate={increaseRate}
        changeIncRate={() => handleIncrease()}
      />

      <ColorRange
        color="blue"
        onIncrease={() => (blue < 255 ? setBlue(blue + 10) : "")}
        onDecrease={() => (red > 0 ? setBlue(blue - 10) : "")}
        colorValue={blue}
        consoleIt={() => consoleColor(blue)}
        increaseRate={increaseRate}
      />

      <ColorRange
        color="green"
        onIncrease={() => (green < 255 ? setGreen(green + 5) : "")}
        onDecrease={() => (green > 0 ? setGreen(green - 5) : "")}
        colorValue={green}
        consoleIt={() => consoleColor(green)}
        increaseRate={increaseRate}
      />
    </View>
  );
};

export default ColorRangeScreen;
