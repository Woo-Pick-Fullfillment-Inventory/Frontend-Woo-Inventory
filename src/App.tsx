import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from './screens/ProfileScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AgbScreen from './screens/AgbScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ScannerScreen from './screens/ScannerScreen';
import { BLACKCOLOR} from './theme';

import { Header } from './components/Header';
import { DrawerContent } from './components/DrawerContent';

export type RootStackParamList = {
  HomeScreen: undefined; // No parameters expected
  AuthScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ProfileScreen: undefined;
  MainMenuScreen: undefined;
  WelcomeScreen: undefined;
  AgbScreen: undefined;
  ScannerScreen: undefined;
  DrawerNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: BLACKCOLOR
        }}
      />
      <Stack.Screen
        name='SignupScreen'
        component={SignupScreen}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: BLACKCOLOR
        }}
      />
      <Stack.Screen
        name='ScannerScreen'
        component={ScannerScreen}
        options={{ title: 'MainMenuScreen' }}
      />
      <Stack.Screen name='AgbScreen' component={AgbScreen} />

      {/* Group of screens that share the same header */}
      <Stack.Group
        screenOptions={Header}
      >
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name='MainMenuScreen'
          component={MainMenuScreen}
          options={{ title: 'Dashboard' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Dashboard'
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
        }}
        drawerContent={() => <DrawerContent />}
      >
        <Drawer.Screen name='Dashboard' component={StackNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
