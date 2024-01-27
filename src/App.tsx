import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AgbScreen from './screens/AgbScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


export type RootStackParamList = {
  HomeScreen: undefined; // No parameters expected
  AuthScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ProfileScreen: { name: string };
  MainMenuScreen: undefined;
  WelcomeScreen: undefined;
  AgbScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'Signup' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="MainMenuScreen"
          component={MainMenuScreen}
          options={{ title: 'MainMenuScreen' }}
        />
        <Stack.Screen name="AgbScreen" component={AgbScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
