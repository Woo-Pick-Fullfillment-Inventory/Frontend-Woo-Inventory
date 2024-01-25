import {useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

import show from '../static/icons/show.svg'
import hide from '../static/icons/hide.svg'

import {PRIMARY_COLOR} from '../theme'

export type Props = {
  title: string,
  placeholder: string,
  value: string
  action: (text: string) => void,
  isPassword?: boolean
};

export const InputField = (props: Props) => {
  const {
    title,
    placeholder,
    value,
    action,
    isPassword,
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
        right={isPassword &&
          <TextInput.Icon
            icon={passwordVisible ? show : hide}
            onPress={togglePasswordVisibility}
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
    color: PRIMARY_COLOR
  },

  inputText: {
    width: 252,
    height: 30,
    backgroundColor: '#fff',
    fontSize: 10,
    marginBottom: 10,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
  },
});

