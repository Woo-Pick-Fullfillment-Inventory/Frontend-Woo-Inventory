// All colors must be defined here
// Default unit of react native is dp
// 1dp = 1.5px

import { StyleSheet } from 'react-native';

export const PRIMARYCOLOR = '#6600FF';
export const BLACKCOLOR = '#000000';
export const WHITECOLOR = '#FFFFFF';

export const globalStyle = StyleSheet.create({
  container: {
    fontFamily: 'Inter'
  },

  screenContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    paddingHorizontal: 40,
    color: BLACKCOLOR,
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
