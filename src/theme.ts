// All colors must be defined here
// Default unit of react native is dp
// 1dp = 1.5px

import { StyleSheet } from 'react-native';

export const PRIMARY_COLOR = '#6600FF';
export const BLACK = '#000';
export const WHITE = '#FFF';

export const globalStyle = StyleSheet.create({
  container: {
    fontFamily: 'Inter'
  },

  screenContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: BLACK,
  },

  logo: {
    width: 10,
    resizeMode: 'contain'
  },

  heading1: {
    fontSize: 37.5,
    fontWeight: '700',
    lineHeight: 45.5,
    textAlign: 'center',
  },

  paragraph: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
  },

  section: {
    marginTop: 10,
  },
});