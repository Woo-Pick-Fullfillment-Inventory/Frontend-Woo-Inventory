import {Alert} from 'react-native';

const SIGNIN_ENDPOINT = 'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signin';

export const login = async (email: string, password: string) => {
  if (!email || !password) {
    Alert.alert(
        'Please fill in required fields',
    );
  }

  if (email && password) {
    try {
      const response = await fetch(SIGNIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            emailOrUsername: email,
            password: password,
        }),
      });
  
      const responseData = await response.json(); // Wait for the JSON response
  
      if (responseData.type) {
        Alert.alert('Invalid credential');
      } else if (responseData.jwtToken) {
        Alert.alert('Success!');
      } else {
        Alert.alert('Unexpected response from server');
      }

    } catch (error) {
      console.error(error)
    }
  }
};
