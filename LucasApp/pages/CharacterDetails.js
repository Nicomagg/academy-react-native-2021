import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';

const CharacterDetails = ({route}) => {
  const {image, name, status, species, location, origin, gender} = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.info}>
        <View style={styles.columnLeft}>
          <View style={styles.spacing}>
            <Text style={styles.label}>Name:</Text>
            <Text numberOfLines={2} style={styles.text}>
              {name}
            </Text>
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.text}>{status}</Text>
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Species:</Text>
            <Text style={styles.text}>{species}</Text>
          </View>
        </View>
        <View style={styles.columnRight}>
          <View style={styles.spacing}>
            <Text style={styles.label}>Origin:</Text>
            <Text style={styles.text}>{origin.name}</Text>
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.text}>{location.name}</Text>
          </View>
          <View style={styles.spacing}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.text}>{gender}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetails;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    height: 350,
  },
  info: {paddingVertical: 10, flexDirection: 'row'},
  columnLeft: {flex: 0.4},
  columnRight: {flex: 0.6},
  spacing: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
});
