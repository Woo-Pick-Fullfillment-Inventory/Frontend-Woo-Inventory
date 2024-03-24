import { useForm, Controller, Control } from 'react-hook-form';
import { Text } from 'react-native-paper';
import { View, StyleSheet, KeyboardTypeOptions } from 'react-native';

import { InputField } from './InputField';

interface ControlledInputRowProps {
  name: string;
  placeholder: string;
  control: Control;
  keyboardType?: KeyboardTypeOptions;
}

export default function ControlledInputRow({ name, placeholder, control, keyboardType = 'default' }: ControlledInputRowProps) {
  return (
    <Controller
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.row}>
          <Text style={styles.label}>{name}:</Text>
          <InputField
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        </View>
      )}
      name={name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 120,
    fontSize: 15, // Smaller font size for the label
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 15,
    height: 30,
  },
});