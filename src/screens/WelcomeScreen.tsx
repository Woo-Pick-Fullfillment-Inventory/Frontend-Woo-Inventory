import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { logoSvg } from '../assets/logo.tsx';
import { BLACKCOLOR, PRIMARYCOLOR, WHITECOLOR, globalStyle } from '../theme';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store.ts';
import * as Keychain from 'react-native-keychain';
import { setIsLoggedIn } from '../redux/authSlice.ts';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen' | 'SignupScreen'
>;

const WelcomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    SplashScreen.hide();
    // TODO do we need to handle errors?
    const checkForToken = async () => {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        dispatch(setIsLoggedIn(true));
        navigation.navigate('MainMenuScreen');
      }
    };

    checkForToken();
  });

  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  const goToRegisterScreen = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainerOne}></View>
      <View style={styles.subContainerTwo}>
        <View style={styles.logo}>
          <SvgXml xml={logoSvg} width="100%" height="100%" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Say Hello To</Text>
          <Text style={styles.welcomeText}>Woo Inventory</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={globalStyle.paragraph}>
            Enjoy the inventory when and where you
          </Text>
          <Text style={globalStyle.paragraph}>want with this app.</Text>
        </View>
      </View>
      <View style={styles.subContainerThree}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={goToLoginScreen}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.separator}> | </Text>
          <TouchableOpacity style={styles.button} onPress={goToRegisterScreen}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainerOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARYCOLOR,
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  subContainerTwo: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITECOLOR,
    width: '100%',
  },
  subContainerThree: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITECOLOR,
    width: '100%',
  },
  textContainer: {
    width: '100%',
    marginBottom: '3%',
    color: BLACKCOLOR,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: '10%',
    width: '35%',
    height: '35%',
  },
  welcomeText: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '700',
    color: BLACKCOLOR,
  },
  button: {
    backgroundColor: WHITECOLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: BLACKCOLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginHorizontal: 5,
    color: BLACKCOLOR,
  },
});

export default WelcomeScreen;
