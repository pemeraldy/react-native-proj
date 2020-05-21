import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
const TextScreen = () => {
  const [name, setName] = useState("Name");
  return (
    <View>
      <Text style={styles.text}>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Text style={styles.text}>Whats up {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    padding: 10,
  },
  text: {
    margin: 15,
    // borderBottomColor: "green",
    // borderStartColor: "orange",
    // borderWidth: 1,
    // borderRadius: 4,
    fontSize: 20,
    height: 60,
    padding: 10,
  },
});

export default TextScreen;
