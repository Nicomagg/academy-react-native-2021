import React from "react";
import { StyleSheet } from "react-native";
import { Button, View, Text } from "react-native";
const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <Button key={i} onPress={() => goToPage(i)} title={i + ""} />
    );
  }
  return (
    <View style={styles.buttons}>
      {prevPage && <Button onPress={prevPage} title="Previous" />}
      {pageButtons.slice(prevPage, nextPage)}
      {nextPage && <Button onPress={nextPage} title="Next" />}
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pagination;
