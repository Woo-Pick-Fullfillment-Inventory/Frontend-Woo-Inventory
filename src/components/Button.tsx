import { Text } from 'react-native-paper';
import { Pressable, StyleSheet } from 'react-native';

import { PRIMARYCOLOR, WHITECOLOR } from '../theme';

type Props = {
  onPress: (event: import('react-native').GestureResponderEvent) => void;
  title: string;
};

export const Button = (props: Props) => {
  const { onPress, title } = props;

  return (
    <Pressable style={styles.primaryBtn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    width: 300,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 37.5,
    backgroundColor: PRIMARYCOLOR,
  },

  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '400',
    color: WHITECOLOR,
  },
});
