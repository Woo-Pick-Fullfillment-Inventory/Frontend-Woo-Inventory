import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';

import { RootStackParamList } from '../App';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { globalStyle } from '../theme';
import { logoSvg } from '../assets/logo';

import { signup } from '../redux/authSlice';
import { ApiValidationErrorResponse } from '../constants/models';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

const isApiValidationErrorResponse = (result: unknown): result is ApiValidationErrorResponse => result !== undefined;

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export const LoginScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [appURL, setAppURL] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnPressSignUp = async () => {
    try {
      setIsLoading(true);
      await dispatch(
        signup({
          appURL,
          email,
          username,
          password,
          passwordConfirmation,
          token,
        })
      ).unwrap();
  
      // Successfully signed up, navigate to the MainMenuScreen
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
        <Text style={globalStyle.heading1}>Join Free</Text>

        <View style={styles.intro}>
          <Text style={globalStyle.paragraph}>The ultimate solution for</Text>
          <Text style={globalStyle.paragraph}>
            optimal warehouse management
          </Text>
        </View>
      </View>

      <View style={globalStyle.section}>
        <InputField
          title={'AppURL'}
          placeholder={'Input your app URL'}
          value={appURL}
          action={text => setAppURL(text)}
        />
        <InputField
          title={'Email'}
          placeholder={'Input your email address'}
          value={email}
          action={text => setEmail(text)}
        />
        <InputField
          title={'Username'}
          placeholder={'Public username'}
          value={username}
          action={text => setUsername(text)}
        />
        <InputField
          title={'Password'}
          placeholder={'Password'}
          value={password}
          action={text => setPassword(text)}
          isPassword
        />
        <InputField
          title={'Confirm Password'}
          placeholder={'Confirm Password'}
          value={passwordConfirmation}
          action={text => setPasswordConfirmation(text)}
          isPassword
        />
        <InputField
          title={'Token'}
          value={token}
          action={text => setToken(text)}
          isCamera
        />

        <Text>
          <CheckBox
            isChecked={checked}
            title={'By joining you agree to our Term & Condition'}
            action={() => setChecked(!checked)}
          />
        </Text>
      </View>

      <View style={styles.buttonSection}>
        {isLoading ? (
          <Text>signing up ...</Text>
        ) : (
          <Button onPress={handleOnPressSignUp} title={'Register'} />
        )}
        <Text style={styles.text}>
          or
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.link}> Login</Text>
          </Pressable>
        </Text>
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

  checkbox: {
    width: 2,
  },

  text: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 15,
  },

  link: {
    top: 3,
  },
});

export default LoginScreen;
