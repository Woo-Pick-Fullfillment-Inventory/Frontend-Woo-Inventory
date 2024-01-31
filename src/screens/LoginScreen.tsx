import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { globalStyle } from '../theme';
import { logoSvg } from '../assets/logo';
import { ApiValidationErrorResponse } from '../constants/models';
import { signin } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import * as Keychain from 'react-native-keychain';

const isApiValidationErrorResponse = (result: unknown): result is ApiValidationErrorResponse => result!== undefined;

export const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [checked, setChecked] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleOnPressLogin = async () => {
    try {
      setIsLoading(true);
      const loginResultSucceeded = await dispatch(signin({ emailOrUsername, password })).unwrap();
      await Keychain.setGenericPassword('jwtToken', loginResultSucceeded.jwtToken);
      navigation.navigate('MainMenuScreen');
    } catch (error) {
      isApiValidationErrorResponse(error) ? Alert.alert('Error ', error.message) : Alert.alert('Error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={globalStyle.screenContainer}>
      <SvgXml xml={logoSvg} width={100} />

      <View style={globalStyle.section}>
        <Text style={globalStyle.heading1}>Login</Text>

        <View style={styles.intro}>
          <Text style={globalStyle.paragraph}>The ultimate solution for</Text>
          <Text style={globalStyle.paragraph}>
            optimal warehouse management
          </Text>
        </View>
      </View>

      <View style={globalStyle.section}>
        <InputField
          title={'Email'}
          placeholder={'Input your email address or username'}
          value={emailOrUsername}
          action={text => setEmailOrUsername(text)}
        />
        <InputField
          title={'Password'}
          placeholder={'Password'}
          value={password}
          action={text => setPassword(text)}
          isPassword
        />

        <Text style={styles.checkboxWrapper}>
          <CheckBox
            isChecked={checked}
            title={'Remember me'}
            action={() => setChecked(!checked)}
          />
        </Text>
      </View>

      <View style={styles.buttonSection}>
        {isLoading ? (
          <Text>logging in ....</Text>
        ) : (
          <Button onPress={handleOnPressLogin} title={'Login'} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    marginTop: 10,
  },

  buttonSection: {
    marginTop: 15,
  },

  checkboxWrapper: {
    width: '100%',
  },

  checkbox: {
    width: 2,
  },
});

export default LoginScreen;
