import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "friend #1", age: 20 },
    { name: "friend #2", age: 21 },
    { name: "friend #3", age: 20 },
    { name: "friend #4", age: 22 },
    { name: "friend #5", age: 25 },
    { name: "friend #6", age: 24 },
    { name: "friend #7", age: 27 },
    { name: "friend #8", age: 20 },
    { name: "friend #9", age: 30 },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name:{item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    backgroundColor: "orange",
    fontSize: 20,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: "#333",
  },
});

export default ListScreen;
