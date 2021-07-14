import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, DrawerLayoutAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon } from "react-native-elements";
import Home from "./components/Home";

export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Inside Drawer</Text>
    </View>
  );
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
        <Home />
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
    fontSize: 15,
    textAlign: "center",
  },
});
