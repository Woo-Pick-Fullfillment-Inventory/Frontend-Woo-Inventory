// MainMenu.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParamList } from '../App';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { logout } from '../redux/authSlice';
import * as Keychain from 'react-native-keychain';


const MainMenuScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await Keychain.resetGenericPassword();
    dispatch(logout());
    navigation.navigate("WelcomeScreen");
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
