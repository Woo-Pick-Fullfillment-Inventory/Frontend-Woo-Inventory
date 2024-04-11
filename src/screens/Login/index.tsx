import React, { useState } from 'react';
import { View, Text, Alert, SafeAreaView, Button } from 'react-native';
import { SvgXml } from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useForm, Controller } from 'react-hook-form';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import {
  emailRegex,
  isApiValidationErrorResponse,
  passwordRegex,
} from '../../constants';
import { logoSvg } from 'src/assets/logo';
import { InputField } from 'src/components/InputField';
import { globalStyle } from 'src/theme';
import { RootStackParamList } from 'src/types/navigation';
// import { SigninPayload } from 'types/authentication';

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailOrUsername: '',
      password: '',
    },
  });

  const handleOnPressLogin = async (data: any) => {
    try {
      setIsLoading(true);
      // const loginResultSucceeded = await dispatch(signin(data)).unwrap();
      // await Keychain.setGenericPassword(
      //   'jwtToken',
      //   loginResultSucceeded.jwtToken,
      // );
      navigation.navigate('DataSyncingScreen');
    } catch (error) {
      console.log('🚀 ~ handleOnPressLogin ~ error:', error);
      isApiValidationErrorResponse(error)
        ? Alert.alert('Error ', error.message)
        : Alert.alert('Error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.mainContent}>
        <SvgXml xml={logoSvg} width={112.5} />

        <Text style={globalStyle.heading1}>Login</Text>

        <View style={styles.intro}>
          <Text style={globalStyle.paragraph}>The ultimate solution for</Text>
          <Text style={globalStyle.paragraph}>
            optimal warehouse management
          </Text>
        </View>

        <View style={globalStyle.section}>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: emailRegex,
                message: 'Please enter a valid email address.',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                placeholder="Email or user name"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="emailOrUsername"
          />
          {errors.emailOrUsername && (
            <Text style={globalStyle.errorText}>
              {errors.emailOrUsername.message}
            </Text>
          )}

          <Controller
            control={control}
            rules={{
              required: 'password is required',
              pattern: {
                value: passwordRegex,
                message: 'Password does not meet complexity requirements.',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                placeholder="Password"
                onChangeText={onChange}
                value={value}
                isPassword
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={globalStyle.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <View style={styles.buttonSection}>
          {isLoading ? (
            <Text>logging in ....</Text>
          ) : (
            <Button
              onPress={handleSubmit(handleOnPressLogin)}
              title={'Login'}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  intro: {
    marginTop: '10rem',
  },

  buttonSection: {
    marginTop: '15rem',
  },

  checkboxWrapper: {
    width: '100%',
  },

  checkbox: {
    width: 2,
  },
});

export default LoginScreen;
