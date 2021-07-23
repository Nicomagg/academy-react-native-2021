import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const Episodes = ({ episode }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.paragraph}>
        {episode.id} - {episode.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
export default Episodes;
