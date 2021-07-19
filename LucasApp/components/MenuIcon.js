import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MenuIcon = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.openDrawer()}
      testID="menuButton">
      <View style={styles.bar} />
      <View style={styles.bar} />
      <View style={styles.bar} />
    </Pressable>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 18,
    paddingHorizontal: 15,
  },
  bar: {
    backgroundColor: 'black',
    width: 30,
    height: 3,
  },
});
