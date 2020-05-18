import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.countText}>{counter}</Text>
      <Button
        title="Increase Count"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Text></Text>
      <Button
        title="Decrease Count"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  countText: {
    fontSize: 40,
    color: "seagreen",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default CounterComponent;
