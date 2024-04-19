import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as globalStyles from '../theme';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/types/navigation';

type InputFieldNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScannerScreen'
>;

type Props = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  icon?: string;
};

export const InputField = (props: Props) => {
  const navigation = useNavigation<InputFieldNavigationProp>();
  const { placeholder, value, onChangeText, isPassword, icon } = props;

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

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginBottom: 2,
  },

  inputText: {
    width: 300,
    height: 40,
    backgroundColor: globalStyles.GRAY_01,
    marginTop: 5,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: globalStyles.GRAY_02,
    color: globalStyles.BLACKCOLOR,
  },
});
