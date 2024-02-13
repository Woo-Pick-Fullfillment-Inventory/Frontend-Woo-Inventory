// All colors must be defined here
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Calculate rem ratio with the most common mobile screen size
export const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 390});

export const PRIMARYCOLOR = '#6600FF';
export const BLACKCOLOR = '#000000';
export const WHITECOLOR = '#FFFFFF';
// Naming after specific color in Figma
export const GRAY_01 = '#F6F6F6'; 
export const GRAY_02 = '#E8E8E8';
export const GRAY_03 = '#BDBDBD';

export const globalStyle = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITECOLOR
  },

  mainContent: {
    alignItems: 'center',
    paddingBottom: '40rem',
    color: BLACKCOLOR,
  },

  logo: {
    width: '10rem',
    resizeMode: 'contain'
  },

  heading1: {
    fontSize: '37.5rem',
    fontWeight: '700',
    lineHeight: '51rem',
    paddingVertical: '8rem',
    textAlign: 'center',
    color: BLACKCOLOR
  },

  paragraph: {
    fontSize: '16rem',
    fontWeight: '400',
    lineHeight: '20rem',
    textAlign: 'center',
    color: BLACKCOLOR
  },

  section: {
    marginTop: '30rem',
  },

  hyperlink: {
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))'
  }
});
