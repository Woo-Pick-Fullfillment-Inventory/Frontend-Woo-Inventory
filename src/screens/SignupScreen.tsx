import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useForm, Controller } from 'react-hook-form';

import { RootStackParamList } from '../App';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { BLACKCOLOR, globalStyle } from '../theme';
import { logoSvg } from '../assets/logo';

import { SignupPayload, signup } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { isApiValidationErrorResponse } from '../constants/models';
import { emailRegex, passwordRegex } from '../constants';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen',
  'AgbScreen'
>;

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      appURL: '',
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      token: '',
    },
  });

  const password = watch("password");

  const handleOnPressSignUp = async (data: SignupPayload) => {
    try {
      setIsLoading(true);
      await dispatch(signup(data)).unwrap();

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyle.mainContent}>
          <SvgXml xml={logoSvg} width={112.5} />
          <Text style={globalStyle.heading1}>Join Free</Text>

          <View>
            <Text style={globalStyle.paragraph}>The ultimate solution for</Text>
            <Text style={globalStyle.paragraph}>
              optimal warehouse management
            </Text>
          </View>

          <View style={globalStyle.section}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="App URL"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="appURL"
            />
            {errors.appURL && (
              <Text style={globalStyle.errorText}>App URL is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: 'Email is required.',
                pattern: {
                  value: emailRegex,
                  message: 'Please enter a valid email address.',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Email"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={globalStyle.errorText}>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="User name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && (
              <Text style={globalStyle.errorText}>Username is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: 'Password is required',
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
              <Text style={globalStyle.errorText}>
                {errors.password.message}
              </Text>
            )}

            <Controller
              control={control}
              rules={{
                required: 'Password is required',
                validate: value =>
                  value === password || 'The passwords do not match',
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Confirm Password"
                  onChangeText={onChange}
                  value={value}
                  isPassword
                />
              )}
              name="passwordConfirmation"
            />
            {errors.passwordConfirmation && (
              <Text style={globalStyle.errorText}>
                {errors.passwordConfirmation.message}
              </Text>
            )}

            <Controller
              control={control}
              rules={{ required: 'Token is required' }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Token"
                  onChangeText={onChange}
                  value={value}
                  icon="camera-outline"
                />
              )}
              name="token"
            />
            {errors.token && (
              <Text style={globalStyle.errorText}>Token is required.</Text>
            )}

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
                <Button
                  onPress={handleSubmit(handleOnPressSignUp)}
                  title={'Register'}
                />
                <Text style={styles.text}>
                  or
                  <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginLink}> Login</Text>
                  </Pressable>
                </Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
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

export default SignupScreen;
