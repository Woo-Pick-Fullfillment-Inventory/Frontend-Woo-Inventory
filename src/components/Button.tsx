import React, { useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { StyleSheet, View, Pressable } from 'react-native';

import {PRIMARY_COLOR} from '../theme'

export type Props = {
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

const styles = StyleSheet.create({
  primaryBtn: {
    width: 252,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: PRIMARY_COLOR,
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
    top: 2
  },
});


