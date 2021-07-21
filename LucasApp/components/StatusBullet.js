import React from 'react';
import {View, StyleSheet} from 'react-native';
const statusColor = {Alive: 'green', Dead: 'grey', unknown: 'yellow'};

const StatusBullet = ({status}) => {
  return (
    <View style={{...styles.bullet, backgroundColor: statusColor[status]}} />
  );
};

export default StatusBullet;

const styles = StyleSheet.create({
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 18,
    marginRight: 5,
  },
});
