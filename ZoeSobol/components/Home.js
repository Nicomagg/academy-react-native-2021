import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Character from "./Character";
import Locations from "./Locations";
import Episodes from "./Episodes";

export default function Home({
  characters,
  currentPageUrl,
  locations,
  episodes,
}) {
  const charList = characters.map((character) => (
    <Character character={character} />
  ));
  const episodeList = episodes.map((episode) => <Episodes episode={episode} />);
  const locationList = locations.map((location) => (
    <Locations location={location} />
  ));
  if (currentPageUrl.includes("https://rickandmortyapi.com/api/location")) {
    return locationList;
  } else if (
    currentPageUrl.includes("https://rickandmortyapi.com/api/episode")
  ) {
    return episodeList;
  } else if (
    currentPageUrl.includes("https://rickandmortyapi.com/api/character")
  ) {
    return charList;
  }
}
