// MainMenu.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type MainMenuScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainMenuScreen'
>;

const MainMenuScreen = () => {
  const navigation = useNavigation<MainMenuScreenNavigationProp>();

  const handleLogout = () => {
    navigation.navigate("HomeScreen")
    console.log('User logged out');
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={handleLogout}>
        Logout
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
});

export default MainMenuScreen;
