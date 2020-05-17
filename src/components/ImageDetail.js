import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imagePath, likes }) => {
  return (
    <View>
      <Image source={imagePath} />
      <Text>{title}</Text>
      <Text>Number of likes: {likes}</Text>
    </View>
  );
};

export default ImageDetail;
