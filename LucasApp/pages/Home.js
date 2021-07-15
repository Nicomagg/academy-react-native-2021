import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MenuIcon from './../components/MenuIcon';

const Home = () => (
  <View style={styles.container}>
    <Text>Home Content</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
});
