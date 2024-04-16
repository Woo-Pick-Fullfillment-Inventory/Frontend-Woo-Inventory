import { RootStackParamList } from '../types/navigation'; // Adjust the import path as necessary
import { RouteProp, useRoute } from '@react-navigation/native';

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import PasswordInput from '../components/PasswordInput';

const ProfileScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProfileScreen'>>();
  const name = route.params?.name;

  return (
    <View>
      <Text>This is {name ? `${name}'s` : 'the'} profile</Text>
      <PasswordInput />
    </View>
  );
};

export default ProfileScreen;
