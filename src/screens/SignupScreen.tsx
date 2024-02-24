// YourComponent.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { RootState } from '../redux/store';

const SignupScreen = () => {
  const [appURL, setAppURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const { userData, loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = () => {
    // dispatch(signup({ appURL, email, password, token }));
  };

  return (
    <View>
      <TextInput placeholder="App URL" value={appURL} onChangeText={setAppURL} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Token" value={token} onChangeText={setToken} />
      <Button onPress={handleSubmit} >Submit</Button>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {userData && <Text>Response: {JSON.stringify(userData)}</Text>}
    </View>
  );
};

export default SignupScreen;
