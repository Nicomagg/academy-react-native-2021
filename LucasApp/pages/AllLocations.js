import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import ItemsList from '../components/ItemsList';
import api from './../api';

const AllLocations = () => {
  const [status, setStatus] = useState('LOADING');
  const [data, setData] = useState();

  useEffect(() => {
    api
      .getAllLocations()
      .then(response => {
        setData(response);
        setStatus('RESOLVED');
      })
      .catch(() => setStatus('REJECTED'));
  }, []);

  return (
    <View style={styles.container}>
      {status === 'LOADING' && (
        <ActivityIndicator size="large" color="#999999" />
      )}
      {status === 'RESOLVED' && <ItemsList data={data} />}
      {status === 'REJECTED' && (
        <Text>Error loading data. Please try again later.</Text>
      )}
    </View>
  );
};

export default AllLocations;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
