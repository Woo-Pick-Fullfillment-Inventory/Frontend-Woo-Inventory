import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin, logout, SigninPayload } from '../../redux/authSlice';
import { StyleSheet, View, Text, GestureResponderEvent } from 'react-native';

import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { RootState } from '../../redux/store';
import {globalStyle} from '../../theme'
import Logo from '../../static/logo/wi.svg'

import { login } from './utils';

export const LoginScreen = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={globalStyle.screenContainer}>
      <Logo width={100} />

      <View style={globalStyle.section}>
        <Text style={globalStyle.heading1} >Login</Text>

        <View style={styles.intro}>
          <Text style={globalStyle.paragraph}>The ultimate solution for</Text>
          <Text style={globalStyle.paragraph}>optimal warehouse management</Text>
        </View>
      </View>

      <View style={globalStyle.section}>
        <InputField
          title={'Email'}
          placeholder={'Input your email address'}
          value={email}
          action={(text) => setEmail(text)}
        />
        <InputField
          title={'Password'}
          placeholder={'Password'}
          value={password}
          action={(text) => setPassword(text)}
          isPassword
        />
       
        <Text>
          <CheckBox
            isChecked={checked}
            title={'Remember me'}
            action={() => setChecked(!checked)}
          />
          </Text>
      </View>
     
      <View style={styles.buttonSection}>
        <Button 
          onPress={() => login(email, password)} 
          title={'Login'}
        />
      </View>
    </View>
  );
};

export type Props = {
  title: string,
  placeholder: string,
};

const styles = StyleSheet.create({
  intro: {
    marginTop: 10
  },

  buttonSection: {
    marginTop: 15,
  },

  checkbox: {
    width: 2
  }
});

export default LoginScreen;

