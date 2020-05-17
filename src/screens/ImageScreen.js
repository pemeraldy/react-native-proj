import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
