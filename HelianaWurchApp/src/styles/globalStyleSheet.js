import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  infoContainer: {
    flex: 2,
  },
  image: {
    width: 90,
    height: 120,
    marginRight: 10,
  },
  character_name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#787878',
    paddingRight: 15,
  },
  character_info: {
    color: '#787878',
  },
});