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

export const textInputStyles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#787878',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export const textListStyles = StyleSheet.create({
  text_list_container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  text_list: {
    fontSize: 14,
    fontWeight: '700',
    color: '#787878',
    paddingBottom: 10,
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});
