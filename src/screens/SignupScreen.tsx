import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Alert, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';

import { RootStackParamList } from '../App';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { globalStyle } from '../theme';
import { logoSvg } from '../assets/logo';

import { signup, ErrorResponse } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { TextBase } from 'react-native';

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

  const handleOnPress = async () => {
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
      // Handle errors (both from rejected thunks and any other errors)
      const errorResponse = error as ErrorResponse;
      const errorMessage =  errorResponse.title || errorResponse.message || 'Unexpected Error';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyle.mainContent}>
          <SvgXml xml={logoSvg} width={112.5} />
          <Text style={globalStyle.heading1}>Join Free</Text>

          <View style={styles.intro}>
            <Text style={globalStyle.paragraph}>The ultimate solution for</Text>
            <Text style={globalStyle.paragraph}>
              optimal warehouse management
            </Text>
          </View>

          <View style={globalStyle.section}>
            <InputField
              placeholder={'Input your app URL'}
              value={appURL}
              action={text => setAppURL(text)}
            />
            <InputField
              placeholder={'Input your email address'}
              value={email}
              action={text => setEmail(text)}
            />
            <InputField
              placeholder={'Public username'}
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
              placeholder={'Insert Token'}
              value={token}
              action={text => setToken(text)}
              isCamera
            />

            <Text>
              <CheckBox
                isChecked={checked}
                title={'By joining you agree to our'}
                action={() => setChecked(!checked)}
              />
              <Pressable
                onPress={() => navigation.navigate('AgbScreen')}
              >
                <Text style={styles.agbLink}>
                  {' Term & Condition'}
                </Text>
              </Pressable>
            </Text>
          </View>

          <View style={styles.buttonSection}>
            {isLoading ? (
              <Text>signing up ...</Text>
            ) : (
              <Button onPress={handleOnPress} title={'Register'} />
            )}
            <Text style={styles.text}>
              or
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.loginLink}> Login</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

  agbLink: {
    fontSize: 12, 
		color: 'rgba(14, 56, 208, 0.56)',
		fontWeight: '700',
    top: 4
  },

  loginLink: {
    top: 3,
  },
});

export default LoginScreen;
