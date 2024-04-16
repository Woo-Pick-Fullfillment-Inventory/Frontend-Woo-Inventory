import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { PRIMARYCOLOR, RED_01, WHITECOLOR } from '../../../../../theme';
import { Actionsheet, Button } from 'native-base';
import { IQueryData } from '../../../List';

interface ISortActionSheet {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setQueryData: (value: IQueryData) => void;
  queryData: IQueryData;
}

const SortActionSheet = ({
  isOpen,
  setIsOpen,
  setQueryData,
  queryData,
}: ISortActionSheet) => {
  const [selectedId, setSelectedId] = useState<string>('1');

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Product name from A to Z',
        value: JSON.stringify({ direction: 'asc', field: 'name' }),
      },
      {
        id: '2',
        label: 'Product name from Z to A',
        value: JSON.stringify({ direction: 'asc', field: 'name' }),
      },
      {
        id: '3',
        label: 'Product group from A to Z',
        value: JSON.stringify({ direction: 'asc', field: 'id' }),
      },
      {
        id: '4',
        label: 'Product group from Z to A',
        value: JSON.stringify({ direction: 'asc', field: 'id' }),
      },
      {
        id: '5',
        label: 'SKU from A to Z',
        value: JSON.stringify({ direction: 'asc', field: 'sku' }),
      },
      {
        id: '6',
        label: 'SKU from Z to A ',
        value: JSON.stringify({ direction: 'asc', field: 'sku' }),
      },
      {
        id: '7',
        label: 'Nearest expiration date',
        value: JSON.stringify({ direction: 'asc', field: 'id' }),
      },
      {
        id: '8',
        label: 'Price from low to high',
        value: JSON.stringify({ direction: 'asc', field: 'price' }),
      },
      {
        id: '9',
        label: 'Price from high to low',
        value: JSON.stringify({ direction: 'asc', field: 'price' }),
      },
    ],
    [],
  );

  const handleSelect = (selectedValue: string) => {
    setSelectedId(selectedValue);
  };

  const handleApply = () => {
    const { direction, field } = JSON.parse(
      radioButtons.find(item => item.id === selectedId)?.value || '',
    );

    setQueryData({
      ...queryData,
      sorting_criteria: {
        ...queryData.sorting_criteria,
        direction,
        field,
      },
    });
    setIsOpen(false);
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Actionsheet.Content>
        <View style={{ alignItems: 'center', padding: 17 }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>Sort by</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={handleSelect}
            selectedId={selectedId}
            containerStyle={{
              alignItems: 'flex-start',
            }}
            labelStyle={{ fontSize: 18, fontWeight: '500' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 18,
          }}>
          <Button
            style={{
              backgroundColor: PRIMARYCOLOR,
              borderRadius: 20,
              width: 120,
              height: 42,
            }}
            onPress={handleApply}>
            Apply
          </Button>
          <View style={{ marginRight: 20 }} />
          <Button
            _text={{ color: RED_01 }}
            borderColor={RED_01}
            borderWidth={2}
            style={{
              backgroundColor: WHITECOLOR,
              borderRadius: 20,
              width: 120,
              height: 42,
            }}>
            Reset all
          </Button>
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default SortActionSheet;
