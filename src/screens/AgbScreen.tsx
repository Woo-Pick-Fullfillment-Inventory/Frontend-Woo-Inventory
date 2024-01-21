// AgbScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const AgbScreen = () => {
  // Placeholder for your AGB text
  const agbText = `Your AGB text goes here. This text should outline the terms and conditions of your service...`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{agbText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default AgbScreen;
