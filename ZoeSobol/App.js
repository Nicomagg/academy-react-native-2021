import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon } from "react-native-elements";
import Home from "./components/Home";
import Pagination from "./components/Pagination";
import Error from "./components/Error";
import Search from "./components/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Locations from "./components/Locations";

export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text
        style={styles.paragraph}
        onPress={() => {
          setCurrentPageUrl("https://rickandmortyapi.com/api/character");
          drawer.current.closeDrawer();
        }}
      >
        HOME
      </Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          setCurrentPageUrl("https://rickandmortyapi.com/api/location");
          drawer.current.closeDrawer();
        }}
      >
        Locations
      </Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          setCurrentPageUrl("https://rickandmortyapi.com/api/episode");
          drawer.current.closeDrawer();
        }}
      >
        Episodes
      </Text>
    </View>
  );

  //new code
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pages, setPages] = useState();
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  //new code

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.results);
        setLocations(data.results);
        setEpisodes(data.results);
        setLoading(false);
        setNextPageUrl(data.info.next);
        setPrevPageUrl(data.info.prev);
        setPages(data.info.pages);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, [currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  function goToPage(num) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);
  }

  return (
    <SafeAreaProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <Header
          backgroundColor="#fff"
          centerComponent={{
            text: "Rick and Morty App",
            style: { color: "#000", fontWeight: "bold", fontSize: 24 },
          }}
          rightComponent={
            <Icon
              name="menu"
              size={35}
              onPress={() => drawer.current.openDrawer()}
            />
          }
        />
        <Search
          setCharacters={setCharacters}
          characters={characters}
          setCurrentPageUrl={setCurrentPageUrl}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <Home
            characters={characters}
            currentPageUrl={currentPageUrl}
            locations={locations}
            episodes={episodes}
          />
          {error && (
            <Error error={error} setCurrentPageUrl={setCurrentPageUrl} />
          )}
          <Pagination
            nextPage={nextPageUrl ? nextPage : null}
            prevPage={prevPageUrl ? prevPage : null}
            goToPage={goToPage}
            pages={pages}
          />
        </ScrollView>
        <StatusBar style="auto" />
      </DrawerLayoutAndroid>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 20,
  },
});
