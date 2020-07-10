import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  return (
    <View>
      <Text>List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;

addQuote(title, length, width, height, paintCost, () => {
  navigation.navigate('Index');
});