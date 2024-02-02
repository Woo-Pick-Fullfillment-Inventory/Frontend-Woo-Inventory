import {Text} from 'react-native-paper';
import {Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {PRIMARYCOLOR, WHITECOLOR} from '../theme'

type Props = {
  onPress: (event: import('react-native').GestureResponderEvent) => void,
  title: string,
};

export const Button = (props: Props) => {
  const {onPress, title} = props;

  return (
    <Pressable
      style={styles.primaryBtn}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = EStyleSheet.create({
  primaryBtn: {
    width: '300rem',
    height: '35rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '37.5rem',
    backgroundColor: PRIMARYCOLOR,
  },

  text: {
    fontSize: '18rem',
    lineHeight: '21rem',
    fontWeight: '400',
    color: WHITECOLOR,
  },
});
