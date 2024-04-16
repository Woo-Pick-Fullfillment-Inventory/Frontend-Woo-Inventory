// MainMenu.js
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../App';
import { logout } from '../redux/authSlice';
import { AppDispatch } from '../redux/store';

type MainMenuScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductsScreen'
>;

const MainMenuScreen = () => {
  const navigation = useNavigation<MainMenuScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await Keychain.resetGenericPassword();
    dispatch(logout());
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('ProductsScreen')}>
        Products
      </Button>
      <View style={{ height: 20 }} />
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
