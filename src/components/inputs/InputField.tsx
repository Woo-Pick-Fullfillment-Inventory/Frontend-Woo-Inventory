import { useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { TextInput } from 'react-native-paper';
import { View, KeyboardTypeOptions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';

import * as globalStyles from '../../theme';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type InputFieldNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScannerScreen'
>;

interface Props extends ComponentPropsWithoutRef<"input"> {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
};

// TODO clean up props
export const InputField = ({
  placeholder,
  value,
  onChangeText,
  isPassword,
  icon,
  keyboardType
}: Props) => {
  const navigation = useNavigation<InputFieldNavigationProp>();

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
        onChangeText={onChangeText}
        secureTextEntry={passwordVisible}
        keyboardType={keyboardType}
        right={
          (isPassword && ( // if the field is password -> return eye icon
            <TextInput.Icon
              icon={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
              onPress={togglePasswordVisibility}
              color={globalStyles.PRIMARYCOLOR}
              size={18}
            />
          )) ||
          (icon && ( // if icon source is defined -> return icon source
            <TextInput.Icon
              icon={icon}
              onPress={() => navigation.navigate('ScannerScreen')}
              color={globalStyles.PRIMARYCOLOR}
              size={18}
            />
          ))
        }
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    width: '300rem',
    marginBottom: 2,
  },

  inputText: {
    width: '300rem',
    height: '40rem',
    backgroundColor: globalStyles.GRAY_01,
    marginTop: '5rem',
    fontSize: '14rem',
    borderWidth: '1rem',
    borderRadius: '5rem',
    borderColor: globalStyles.GRAY_02,
    color: globalStyles.BLACKCOLOR,
  },
});
