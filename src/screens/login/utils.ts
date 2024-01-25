// Tạm thời dùng default alert vì chưa có design cho warning messages
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
              email: email,
              password: password,
          }),
        }).then((res) => res.json());

        if (response.type) {
          Alert.alert(
            'Invalid credential'
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
