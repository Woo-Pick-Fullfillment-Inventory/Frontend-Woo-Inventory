import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { globalStyle } from '../theme';
import { logoSvg } from '../assets/logo';

import { signin, ErrorResponse } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import * as Keychain from 'react-native-keychain';

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
      const loginResult = await dispatch(signin({ emailOrUsername, password })).unwrap();
  
      // Successfully logged in, navigate to the MainMenuScreen
      navigation.navigate('MainMenuScreen');
      
      if (checked) {
        const jwtToken = loginResult.jwtToken;
        await Keychain.setGenericPassword('jwtToken', jwtToken);
      }
    } catch (error) {
      // Handle errors (both from rejected thunks and any other errors)
      const errorResponse = error as ErrorResponse;
      const errorMessage =  errorResponse.title || errorResponse.message || 'Unexpected Error';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  

  // const handleOnPressLogin = async () => {
  //   try {
  //     setIsLoading(true);
  //     const loginResult = await dispatch(signin({ emailOrUsername, password }));
  //     setIsLoading(false);

  //     // Successfully logged in
  //     if (signin.fulfilled.match(loginResult)) {
  //       navigation.navigate('MainMenuScreen');
  //       if (checked) {
  //         const jwtToken = loginResult.payload.jwtToken;
  //         await Keychain.setGenericPassword('jwtToken', jwtToken);
  //       }
  //       // handle when response is not ok
  //     } else if (signin.rejected.match(loginResult)) {
  //       /**
  //        loginResult example {"error": {"message": "Rejected"}, "meta": {"aborted": false, "arg": {"emailOrUsername": "", "password": ""}, "condition": false, "rejectedWithValue": true, "requestId": "wKOE2rlcPwYaUgpjsAb8T", "requestStatus": "rejected"}, "payload": {"title": "invalid credentials", "type": "/auth/signin-failed"}, "type": "auth/signin/rejected"}
  //        */

  //       const errorPayload = loginResult.payload as ErrorResponse; // Cast to the error type
  //       const errorMessage = errorPayload.title || 'Error occurred';
  //       Alert.alert('Error', errorMessage);
  //     }
  //   } catch (error) {
  //     const errorMessage =
  //       error instanceof Error ? error.message : 'Unexpected Error';
  //     Alert.alert('Error', errorMessage);
  //   }
  // };

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
