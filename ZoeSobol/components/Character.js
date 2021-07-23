import React, { useContext, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, Modal } from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.card}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.modalImage}
              source={{ uri: character.image }}
            />

            <View style={styles.innerText}>
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                {character.name}
              </Text>

              <Text>
                <Icon name="grade" size={16} color={colorIcon} />{" "}
                {character.status} {character.species}
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
        </View>
      </Modal>

      <Image style={styles.image} source={{ uri: character.image }} />

      <View style={styles.innerText}>
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => setModalVisible(true)}
        >
          {character.name}
        </Text>

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});

export default Character;
