import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin, logout, SigninPayload } from '../redux/authSlice';
import { Text, TextInput, Button } from 'react-native-paper';
import { RootState } from '../redux/store';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // State hooks for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // const userData: SigninPayload = {
    //   /* data from form later */
    // };
    // dispatch(signin(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button onPress={handleLogin}>Login</Button>
      {isLoggedIn && <Button onPress={handleLogout}>Logout</Button>}

      <Text>This is the login page</Text>
    </>
  );
};

export default LoginScreen;
