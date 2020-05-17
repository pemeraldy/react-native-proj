import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.screenHeader}>Image Screen</Text>
      <ImageDetail
        title="Sport"
        imagePath={require("../../assets/imageOne.jpg")}
        likes={9}
      />
      <ImageDetail
        title="Diet"
        imagePath={require("../../assets/imageTwo.jpg")}
        likes={20}
      />

      <ImageDetail
        title="Flower"
        imagePath={require("../../assets/imageThree.jpg")}
        likes={25}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  screenHeader: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default ImageScreen;
