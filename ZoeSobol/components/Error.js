import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Error({ error, setCurrentPageUrl }) {
  if (error) {
    return (
      <View style={styles.error}>
        <Text>Error loading API.</Text>
        <Button
          onPress={() =>
            setCurrentPageUrl("https://rickandmortyapi.com/api/character")
          }
          title="Try Again!"
        />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
