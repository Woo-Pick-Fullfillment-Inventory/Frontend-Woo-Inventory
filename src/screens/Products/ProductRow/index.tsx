import React from 'react';
import { Image, Text, View } from 'react-native';
import { GRAY_02 } from '../../../theme';

const ProductRow = ({ item }: any) => {
  return (
    <View
      style={{
        backgroundColor: GRAY_02,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Image alt="" source={{ uri: item.image_src }} width={60} height={60} />
      <View style={{ marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <View style={{ marginBottom: 4 }} />
        <Text>Product group - Price</Text>
      </View>
    </View>
  );
};

export default ProductRow;
