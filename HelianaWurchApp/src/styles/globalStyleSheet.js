import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 540;

export const COLORS = {
  white: '#fff',
  gray: '#E0E0E0',
  primary: '#2874A6',
  secondary: '#7FB3D5',
  tertiary: '#7BBA9C',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
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
    color: COLORS.primary,
    paddingRight: 15,
  },
  character_info: {
    color: COLORS.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
    paddingRight: 40,
  },
  bullet: {
    height: 12,
    width: 12,
    borderRadius: 6,
    alignSelf: 'flex-end',
    marginTop: -5,
  },
});

export const textInputStyles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: COLORS.primary,
    borderRadius: 5,
    backgroundColor: COLORS.white,
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
    color: COLORS.primary,
    paddingBottom: 10,
    margin: 17,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  text_loading: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
    alignSelf: 'center',
    paddingBottom: 25,
  },
});

export const characterProfileStyles = StyleSheet.create({
  image: {
    width: win.width,
    height: 450 * ratio,
    marginBottom: 5,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  container_info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  container_box: {
    width: '48%',
  },
  character_bold_text: {fontSize: 16, fontWeight: '700', marginVertical: 5},
  character_text: {fontSize: 16, fontWeight: '100', marginVertical: 5},
  character_name: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.primary,
    paddingRight: 15,
  },
  character_species: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: -5,
    color: COLORS.secondary,
  },
});
