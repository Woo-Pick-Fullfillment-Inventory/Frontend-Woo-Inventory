// HomeScreen.js
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { RootStackParamList } from 'src/types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen' | 'SignupScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.button}>
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SignupScreen')}
        style={styles.button}>
        Sign Up
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
  button: {
    margin: 10,
  },
});

export default HomeScreen;
