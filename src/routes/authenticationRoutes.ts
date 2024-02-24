import LoginScreen from '../screens/LoginScreen';

export const authenticationRoutes = {
  loginScreen: {
    name: 'login',
    component: LoginScreen,
    options: { title: 'Welcome', headerShown: false },
  },
};
