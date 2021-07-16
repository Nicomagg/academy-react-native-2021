import React, {useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import CharacterItem from '../components/CharacterItem';
import api from './../api';
import MenuIcon from './../components/MenuIcon';

const Home = () => {
  const [status, setStatus] = useState('LOADING');
  const [data, setData] = useState();

  useEffect(() => {
    api
      .getAllCharacters()
      .then(response => {
        setData(response);
        setStatus('RESOLVED');
      })
      .catch(() => setStatus('REJECTED'));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {status === 'LOADING' && <ActivityIndicator color="#999999" />}
      {status === 'RESOLVED' && (
        <ScrollView>
          <CharacterItem data={data[0]} />
        </ScrollView>
      )}
      {status === 'REJECTED' && (
        <Text>Error loading data. Please try again later.</Text>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
});
