import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Icon
        style={styles.icon}
        name="angle-left"
        size={35}
        type="font-awesome"
        color="#000000"
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  icon: {},
});
