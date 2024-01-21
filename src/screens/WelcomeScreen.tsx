// WelcomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const WelcomeScreen = () => {
  const handleNextPress = () => {
    // Handle the 'Next' button press
    // e.g., navigate to another screen
    console.log('Next pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button mode="contained" onPress={handleNextPress}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
