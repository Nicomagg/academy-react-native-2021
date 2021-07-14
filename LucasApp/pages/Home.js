import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text>Home</Text>
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
