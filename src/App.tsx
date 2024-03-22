import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BLACKCOLOR } from './theme';
import {
  ProfileScreen,
  MainMenuScreen,
  WelcomeScreen,
  LoginScreen,
  SignupScreen,
  ScannerScreen,
  DataSyncingScreen,
} from './screens';

export type RootStackParamList = {
  HomeScreen: undefined; // No parameters expected
  AuthScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ProfileScreen: { name: string };
  MainMenuScreen: undefined;
  WelcomeScreen: undefined;
  AgbScreen: undefined;
  ScannerScreen: undefined;
  ProductsScreen: undefined;
  DataSyncingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: '',
              headerShadowVisible: false,
              headerTintColor: BLACKCOLOR,
            }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              title: '',
              headerShadowVisible: false,
              headerTintColor: BLACKCOLOR,
            }}
          />
          <Stack.Screen
            name="DataSyncingScreen"
            component={DataSyncingScreen}
            options={{
              title: '',
              headerShadowVisible: false,
              headerTintColor: BLACKCOLOR,
            }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ title: 'Profile' }}
          />
          <Stack.Screen
            name="MainMenuScreen"
            component={MainMenuScreen}
            options={{
              title: 'MainMenuScreen',
              gestureEnabled: false, // So that user can not swipe back in IOS
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="ScannerScreen"
            component={ScannerScreen}
            options={{ title: 'Scanner Screen' }}
          />
          <Stack.Screen name="AgbScreen" component={ScannerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
