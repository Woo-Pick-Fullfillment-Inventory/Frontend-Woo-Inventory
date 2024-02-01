import {useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import camera from '../assets/icons/camera.png';
import show from '../assets/icons/show.png';
import hide from '../assets/icons/hide.png';
import * as globalStyles from '../theme'
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type InputFieldNavigationProp = NativeStackNavigationProp<RootStackParamList,'ScannerScreen'>;

type Props = {
  placeholder?: string,
  value: string
  action: (text: string) => void,
  isPassword?: boolean
  isCamera?: boolean
}

export const InputField = (props: Props) => {
  const navigation = useNavigation<InputFieldNavigationProp>();
  const {
    placeholder,
    value,
    action,
    isPassword,
    isCamera
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={globalStyles.GRAY_03}
        onChangeText={action}
        secureTextEntry={passwordVisible}
        right={isPassword && // if the field is password -> return eye icon
          <TextInput.Icon
            icon={passwordVisible ? show : hide}
            onPress={togglePasswordVisibility}
            color={globalStyles.PRIMARYCOLOR}
          />
          ||
          isCamera &&  // if icon source is defined -> return icon source
            <TextInput.Icon
              icon={camera}
              onPress={() => navigation.navigate('ScannerScreen')}
              color={globalStyles.PRIMARYCOLOR}
            />
          }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
  },

  inputText: {
    width: 300,
    height: 40,
    backgroundColor: globalStyles.GRAY_01,
    marginBottom: 13,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: globalStyles.GRAY_02,
    color: globalStyles.BLACKCOLOR,
  },
});

