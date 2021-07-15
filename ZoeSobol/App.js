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

export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Inside Drawer</Text>
    </View>
  );

  //new code
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pages, setPages] = useState();
  //new code

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results);
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages);
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
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <Home characters={characters} />
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
