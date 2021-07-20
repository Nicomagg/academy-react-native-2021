import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import CharactersList from '../components/CharactersList';
import api from './../api';

const Home = () => {
  const [status, setStatus] = useState('LOADING');
  const [data, setData] = useState();

  useEffect(() => {
    /* api
      .getAllCharacters()
      .then(response => {
        setData(response);
        setStatus('RESOLVED');
      })
      .catch(() => setStatus('REJECTED')); */

    handleSearchByName('ohnny Depp'); // works 😀
  }, []);

  const handleSearchByName = name => {
    setStatus('LOADING');
    api
      .getCharactersFilteredByName(name)
      .then(response => {
        setData(response);
        setStatus('RESOLVED');
      })
      .catch(() => setStatus('REJECTED'));
  };

  return (
    <View style={styles.container}>
      {status === 'LOADING' && <ActivityIndicator color="#999999" />}
      {status === 'RESOLVED' && <CharactersList data={data} />}
      {status === 'REJECTED' && (
        <Text>Error loading data. Please try again later.</Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
