import DataSyncingScreen from 'src/screens/DataSyncingScreen';
import MainMenuScreen from 'src/screens/MainMenuScreen';
import ProfileScreen from 'src/screens/ProfileScreen';
import ScannerScreen from 'src/screens/ScannerScreen';
import WelcomeScreen from 'src/screens/WelcomeScreen';
import { authenticationRoutes } from './authenticationRoutes';
import { productRoutes } from './productRoutes';
import { BLACKCOLOR } from 'src/theme';

export const routes = {
  welcomeScreen: {
    name: 'WelcomeScreen',
    component: WelcomeScreen,
    options: { title: '', headerShown: false },
  },
  dataSyncingScreen: {
    name: 'DataSyncingScreen',
    component: DataSyncingScreen,
    options: { title: '', headerShown: false, headerTintColor: BLACKCOLOR },
  },
  profileScreen: {
    name: 'ProfileScreen',
    component: ProfileScreen,
    options: { title: '', headerShown: false, headerTintColor: BLACKCOLOR },
  },
  mainMenuScreen: {
    name: 'MainMenuScreen',
    component: MainMenuScreen,
    options: {
      title: 'MainMenuScreen',
      gestureEnabled: false, // So that user can not swipe back in IOS
      headerBackVisible: false,
    },
  },
  scannerScreen: {
    name: 'ScannerScreen',
    component: ScannerScreen,
    options: { title: 'Scanner Screen' },
  },
  agbScreen: {
    name: 'AgbScreen',
    component: ScannerScreen,
    options: { title: '', headerShown: false, headerTintColor: BLACKCOLOR },
  },
  ...authenticationRoutes,
  ...productRoutes,
};

export const routesArr = Object.values(routes);
