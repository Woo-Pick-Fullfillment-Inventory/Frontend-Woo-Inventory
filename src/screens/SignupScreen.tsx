import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';

import { RootStackParamList } from '../App';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { BLACKCOLOR, globalStyle } from '../theme';
import { logoSvg } from '../assets/logo';

import { signup } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { isApiValidationErrorResponse } from '../constants/models';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen',
  'AgbScreen'
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
        }),
      ).unwrap();

      // Successfully signed up, navigate to the MainMenuScreen
      navigation.navigate('MainMenuScreen');
    } catch (error) {
      isApiValidationErrorResponse(error)
        ? Alert.alert('Error ', error.message)
        : Alert.alert('Error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <KeyboardAvoidingView // IOS need this to be scrollable when typing
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={globalStyle.mainContent}>
            <SvgXml xml={logoSvg} width={112.5} />
            <Text style={globalStyle.heading1}>Join Free</Text>

            <View>
              <Text style={globalStyle.paragraph}>
                The ultimate solution for
              </Text>
              <Text style={globalStyle.paragraph}>
                optimal warehouse management
              </Text>
            </View>

            <View style={globalStyle.section}>
              <InputField
                placeholder={'App URL'}
                value={appURL}
                action={text => setAppURL(text)}
              />
              <InputField
                placeholder={'Email'}
                value={email}
                action={text => setEmail(text)}
              />
              <InputField
                placeholder={'Username'}
                value={username}
                action={text => setUsername(text)}
              />
              <InputField
                placeholder={'Password'}
                value={password}
                action={text => setPassword(text)}
                isPassword
              />
              <InputField
                placeholder={'Confirm Password'}
                value={passwordConfirmation}
                action={text => setPasswordConfirmation(text)}
                isPassword
              />
              <InputField
                placeholder={'Token'}
                value={token}
                action={text => setToken(text)}
                icon="camera-outline"
              />

              <Text>
                <CheckBox
                  isChecked={checked}
                  title={'By joining you agree to our'}
                  action={() => setChecked(!checked)}
                />
                <Pressable onPress={() => navigation.navigate('AgbScreen')}>
                  <Text style={styles.agbLink}>{' Term & Condition'}</Text>
                </Pressable>
              </Text>
            </View>

            <View style={styles.buttonSection}>
              {isLoading ? (
                <Text>signing up ...</Text>
              ) : (
                <>
                  <Button onPress={handleOnPressSignUp} title={'Register'} />
                  <Text style={styles.text}>
                    or
                    <Pressable
                      onPress={() => navigation.navigate('LoginScreen')}>
                      <Text style={styles.loginLink}> Login</Text>
                    </Pressable>
                  </Text>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  buttonSection: {
    marginTop: '15rem',
  },

  checkbox: {
    width: '2rem',
  },

  text: {
    fontSize: '18rem',
    fontWeight: '400',
    lineHeight: '22.4rem',
    textAlign: 'center',
    marginTop: '15rem',
    color: BLACKCOLOR,
  },

  agbLink: {
    fontSize: '13rem',
    color: 'rgba(14, 56, 208, 0.56)',
    fontWeight: '700',
  },

  loginLink: {
    top: '4rem',
    fontSize: '18rem',
    color: BLACKCOLOR,
  },
});

export default LoginScreen;
