import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ColorComponent = () => {
  const [bgColor, setBgColor] = useState(["rgb(3, 108, 201)"]);

  const changeBG = () => {
    const color = randomRGB();
    // setBgColor(bgColor.concat(color));
    setBgColor([...bgColor, color]);
    console.log(bgColor);
  };
  return (
    <View>
      <Text></Text>
      <Button title="Change box background" onPress={() => changeBG()} />
      <Text></Text>

      <FlatList
        scrollEnabled
        keyExtractor={(item) => item}
        data={bgColor}
        renderItem={({ item }) => {
          return (
            <View
              style={{ backgroundColor: item, width: 100, height: 100 }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcfc",
    flex: 1,
    justifyContent: "center",
  },
  colorBox: {
    width: 40,
    height: 40,
  },
});

export default ColorComponent;
