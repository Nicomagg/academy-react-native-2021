import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const Locations = ({ location }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.paragraph}>
        {location.id} - {location.name}
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
export default Locations;
