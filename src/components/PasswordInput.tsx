import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <TextInput
      label="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!passwordVisible}
      right={
        <TextInput.Icon
          icon={passwordVisible ? 'eye-off' : 'eye'}
          onPress={togglePasswordVisibility}
        />
      }
    />
  );
};

export default PasswordInput;
