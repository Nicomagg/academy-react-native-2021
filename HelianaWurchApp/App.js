import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0e0e0',
    padding: 15,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Heliana App</Text>
      </View>
    </NavigationContainer>
  );
}
