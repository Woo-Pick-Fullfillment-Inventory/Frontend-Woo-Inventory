import { render } from '@testing-library/react-native';
import * as React from 'react';
import LoginScreen from '../src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types/navigation';
import { PRIMARYCOLOR, WHITECOLOR } from 'src/theme';
import HeaderRight from 'src/components/HeaderRight';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    // Mock other navigation methods your component uses
  }),
}));
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

test('Testing Login screen', () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  render(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: PRIMARYCOLOR },
          headerTitleAlign: 'center',
          headerTintColor: WHITECOLOR,
          headerRight: HeaderRight,
        }}>
        <LoginScreen />
      </Stack.Navigator>
    </NavigationContainer>,
  );
});
