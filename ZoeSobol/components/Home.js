import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Character from "./Character";

export default function Home({ characters }) {
  const charList = characters.map((character) => (
    <Character character={character} />
  ));
  return charList;
}
