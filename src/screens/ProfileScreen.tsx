import { RootStackParamList } from '../App'; // Adjust the import path as necessary
import { RouteProp } from '@react-navigation/native';

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import PasswordInput from '../components/PasswordInput';

type Props = {
  route: RouteProp<RootStackParamList, 'ProfileScreen'>;
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>This is profile</Text>
      <PasswordInput />
    </View>
  );
};

export default ProfileScreen;
