import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StatusBullet from './StatusBullet';

const CharacterItem = ({data}) => {
  const navigation = useNavigation();
  const {image, name, status, species, location, origin} = data;
  return (
    <Pressable
      android_ripple={{color: '#eee'}}
      onPress={() => navigation.navigate('Character Details', data)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
          <View style={styles.spacing}>
            <Text numberOfLines={2} style={styles.name}>
              {name}
            </Text>
            <View style={styles.status}>
              <StatusBullet status={status} />
              <Text style={styles.statusText}>
                {status} {species}
              </Text>
            </View>

            <Text style={styles.label}>Last known location:</Text>
            <Text numberOfLines={1} style={styles.location}>
              {location.name}
            </Text>
            <Text style={styles.label}>First seen in:</Text>
            <Text numberOfLines={1} style={styles.location}>
              {origin.name}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {
    flex: 0.5,
    height: 180,
  },
  info: {
    flex: 0.5,
  },
  spacing: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  statusText: {
    fontWeight: 'bold',
    color: '#888',
    fontSize: 14,
  },
  label: {fontWeight: 'bold', color: '#888', fontSize: 14},
  location: {fontWeight: 'bold', color: '#333', fontSize: 14},
});
