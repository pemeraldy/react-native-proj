import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textOne}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
  textOne: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },
  textTwo: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default BoxScreen;
