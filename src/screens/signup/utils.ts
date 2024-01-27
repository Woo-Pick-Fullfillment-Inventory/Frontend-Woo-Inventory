import {Alert} from 'react-native';

const APP_URL = 'https://thanhcong-asia-gmbh.de';
const SIGNUP_ENDPOINT = 'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signup';

export const signup = async (email: string, username: string, password: string, confirmPassword: string, token: string) => {
  if (!email || !username|| !password || !confirmPassword || !token) {
    Alert.alert(
      'Please fill in required fields',
    );
  }

  if (password === confirmPassword) {
    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appURL: APP_URL,
          email: email,
          username: username,
          password: password,
          passwordConfirmation: confirmPassword,
          token: token,
        }),
      }).then((res) => res.json());

      if (response.type) {
        Alert.alert(
          response.title
        );
      }

      if (response.jwtToken) {
        Alert.alert(
          'Success!'
        );
        }

    } catch (error) {
      console.error(error)
    }
  }
};
