import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
const TextScreen = () => {
  const [name, setName] = useState("Name");
  const [pWord, setPword] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pWord}
        onChangeText={(newp) => setPword(newp)}
      />
      {pWord.length < 4 ? <Text>Password Invlid!</Text> : null}

      <Text style={styles.text}>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
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
