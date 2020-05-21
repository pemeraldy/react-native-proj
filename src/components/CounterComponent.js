import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return { ...state, counter: state.counter + action.payload };
    case "decrease_count":
      return state.counter + action.payload < 0
        ? state
        : { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterComponent = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Text style={styles.countText}>{counter}</Text>
      <Button
        title="Increase Count"
        onPress={() => dispatch({ type: "increase_count", payload: 1 })}
      />
      <Text></Text>
      <Button
        title="Decrease Count"
        onPress={() => dispatch({ type: "decrease_count", payload: -1 })}
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
