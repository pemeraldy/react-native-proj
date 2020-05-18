import React from "react";
import { View, Text, Button } from "react-native";
import CounterComponent from "../components/CounterComponent";
const CounterScreen = () => {
  return (
    <View>
      <Text>Counter Screen</Text>
      <CounterComponent />
    </View>
  );
};

export default CounterScreen;
