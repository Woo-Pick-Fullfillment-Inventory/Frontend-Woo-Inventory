// AddProductScreen.js
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { RootStackParamList } from '../App';
import ControlledInputRow from '../components/inputs/ControlledInputRow';
import { globalStyle } from '../theme';
// import { Button } from '../components/Button';
import { Button } from 'react-native-paper';

// TODO navigate when cancle
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen' | 'SignupScreen'
>;

// TODO submit data

const AddProductScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.container}>
        <ControlledInputRow
          name="Name"
          placeholder="Enter Name"
          control={control}
        />
        <ControlledInputRow
          name="SKU"
          placeholder="Enter SKU"
          control={control}
        />
        <ControlledInputRow
          name="ProductGroup"
          placeholder="Enter product group"
          control={control}
        />
        <ControlledInputRow
          name="Barcode"
          placeholder="Barcode"
          control={control}
        />
        <ControlledInputRow
          name="Imei"
          placeholder="Enter Imei"
          control={control}
        />
        <ControlledInputRow
          name="Description"
          placeholder="Enter description"
          control={control}
        />
        <ControlledInputRow
          name="Supplier"
          placeholder="Enter Supplier"
          control={control}
        />
        <ControlledInputRow
          name="CostPrice"
          placeholder="Enter Cost Price"
          control={control}
        />
        <ControlledInputRow
          name="RegularPrice"
          placeholder="Enter Regular Price"
          control={control}
        />
        <ControlledInputRow
          name="SalePrice"
          placeholder="Enter Sale Price"
          control={control}
        />
        <ControlledInputRow
          name="Tax"
          placeholder="Enter Tax"
          control={control}
        />
        <ControlledInputRow
          name="Dimension"
          placeholder="Enter Dimension"
          control={control}
        />
        <ControlledInputRow
          name="Weight"
          placeholder="Enter Weight"
          control={control}
        />
        <ControlledInputRow
          name="StockQuantity"
          placeholder="Enter Stock Quantity"
          control={control}
          keyboardType="numeric"
        />
        <ControlledInputRow
          name="ImageUrl"
          placeholder="Enter Image URL"
          control={control}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row', // Arrange items in a row
          justifyContent: 'space-around', // Distribute space between items
          // You can add other styling here as needed
        }}>
        <Button style={{ width: 120 }} mode="contained" onPress={() => {}}>
          Save
        </Button>
        <Button style={{ width: 120 }} mode="contained" onPress={() => {}}> 
          Cancle
        </Button>
      </View>
    </ScrollView>
  );
};

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
export default AddProductScreen;
