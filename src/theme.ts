// All colors must be defined here

import { StyleSheet } from 'react-native';

export const PRIMARYCOLOR = '#6600FF';
export const BLACKCOLOR = '#000000';
export const WHITECOLOR = '#FFFFFF';
// Naming after specific color in Figma
export const GRAY_01 = '#F6F6F6'; 
export const GRAY_02 = '#E8E8E8';
export const GRAY_03 = '#BDBDBD';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITECOLOR
  },

  mainContent: {
    alignItems: 'center',
    paddingBottom: 40,
    color: BLACKCOLOR,
  },

  logo: {
    width: 10,
    resizeMode: 'contain'
  },

  heading1: {
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 61,
    paddingVertical: 8,
    textAlign: 'center',
    color: BLACKCOLOR
  },

  paragraph: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 22.4,
    textAlign: 'center',
    color: BLACKCOLOR
  },

  section: {
    marginTop: 30,
  },

  hyperlink: {
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))'
  }
  
});
