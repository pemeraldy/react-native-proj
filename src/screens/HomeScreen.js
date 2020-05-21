import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to components Demo"
        onPress={() => navigation.navigate("Nav")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to Image screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Text></Text>
      <Button
        title="Go to Counter screen"
        onPress={() => navigation.navigate("Count")}
      />
      <Text></Text>
      <Button
        title="Go to Color screen"
        onPress={() => navigation.navigate("Color")}
      />

      <Text></Text>
      <Button
        title="Go to Color Range screen"
        onPress={() => navigation.navigate("ColorRange")}
      />

      <Text></Text>
      <Button
        title="Go to Text screen"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
