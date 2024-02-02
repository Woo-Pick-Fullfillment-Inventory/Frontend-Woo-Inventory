import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';

import * as globalStyles from '../theme'
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type InputFieldNavigationProp = NativeStackNavigationProp<RootStackParamList,'ScannerScreen'>;

type Props = {
  placeholder?: string,
  value: string
  action: (text: string) => void,
  isPassword?: boolean
  icon?: string
}

export const InputField = (props: Props) => {
  const navigation = useNavigation<InputFieldNavigationProp>();
  const {
    placeholder,
    value,
    action,
    isPassword,
    icon
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
            icon={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
            onPress={togglePasswordVisibility}
            color={globalStyles.PRIMARYCOLOR}
            size={18}
          />
          ||
          icon &&  // if icon source is defined -> return icon source
            <TextInput.Icon
              icon={icon}
              onPress={() => navigation.navigate('ScannerScreen')}
              color={globalStyles.PRIMARYCOLOR}
              size={18}
            />
          }
      />
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    marginBottom: 2,
  },

  inputText: {
    width: '300rem',
    height: '40rem',
    backgroundColor: globalStyles.GRAY_01,
    marginBottom: '10rem',
    fontSize: '14rem',
    borderWidth: '1rem',
    borderRadius: '5rem',
    borderColor: globalStyles.GRAY_02,
    color: globalStyles.BLACKCOLOR,
  },
});

