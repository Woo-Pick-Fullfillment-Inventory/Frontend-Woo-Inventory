import LoginScreen from 'src/screens/Login';
import SignupScreen from 'src/screens/SignupScreen';

export const authenticationRoutes = {
  loginScreen: {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { title: 'Welcome', headerShown: false },
  },
  signupScreen: {
    name: 'SignupScreen',
    component: SignupScreen,
    options: { title: 'Welcome', headerShown: false },
  },
};
