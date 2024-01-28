import {useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import camera from '../assets/icons/camera.png';
import show from '../assets/icons/show.png';
import hide from '../assets/icons/hide.png';
import {PRIMARYCOLOR} from '../theme'
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type InputFieldNavigationProp = NativeStackNavigationProp<RootStackParamList,'ScannerScreen'>;

type Props = {
  title: string,
  placeholder?: string,
  value: string
  action: (text: string) => void,
  isPassword?: boolean
  isCamera?: boolean
}

export const InputField = (props: Props) => {
  const navigation = useNavigation<InputFieldNavigationProp>();
  const {
    title,
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
      <Text style={styles.title}>
        {title}
      </Text>

      <TextInput
        style={styles.inputText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#C8CAD0'}
        onChangeText={action}
        secureTextEntry={passwordVisible}
        right={isPassword && // if the field is password -> return eye icon
          <TextInput.Icon
            icon={passwordVisible ? show : hide}
            onPress={togglePasswordVisibility}
            color={PRIMARYCOLOR}
          />
          ||
          isCamera &&  // if icon source is defined -> return icon source
            <TextInput.Icon
              icon={camera}
              onPress={() => navigation.navigate('ScannerScreen')}
              color={PRIMARYCOLOR}
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

  title: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13,
    color: PRIMARYCOLOR
  },

  inputText: {
    width: 270,
    height: 30,
    backgroundColor: '#fff',
    marginBottom: 10,
    fontSize: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: PRIMARYCOLOR,
  },
});

