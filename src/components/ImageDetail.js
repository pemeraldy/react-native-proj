import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ImageDetail = ({ title, imagePath, likes }) => {
  const [likeRate, setLikeRate] = useState(0);
  return (
    <View>
      <Image source={imagePath} />
      <Text>{title}</Text>
      <Text>Number of likes: {likeRate}</Text>
      <Button
        title="Like"
        onPress={() => {
          let incLike = likeRate + 1;
          setLikeRate(incLike);
        }}
      />
    </View>
  );
};

export default ImageDetail;
