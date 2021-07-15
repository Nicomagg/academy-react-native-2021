import React, { useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Character = ({ character }) => {
  let colorIcon;
  if (character.status === "Dead") {
    colorIcon = "red";
  } else if (character.status === "Alive") {
    colorIcon = "green";
  } else {
    colorIcon = "black";
  }
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: character.image }} />

      <View style={styles.innerText}>
        <Text style={{ fontWeight: "bold" }}>{character.name}</Text>

        <Text>
          <Icon name="grade" size={16} color={colorIcon} /> {character.status}{" "}
          {character.species}
        </Text>

        <Text>Last known location:</Text>
        <Text style={{ fontWeight: "bold", color: "#333" }}>
          {character.location.name}
        </Text>
        <Text style={{ color: "#000" }}>First seen in:</Text>
        <Text style={{ fontWeight: "bold", color: "#333" }}>
          {character.origin.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    marginHorizontal: 30,
    flex: 1,
    flexDirection: "row",
    minHeight: 150,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  innerText: {
    flex: 1,
    flexDirection: "column",
    marginRight: 30,
    width: 150,
    marginLeft: 5,
  },
});

export default Character;
