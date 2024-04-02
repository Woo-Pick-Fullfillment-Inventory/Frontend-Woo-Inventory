import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GRAY_02, PRIMARYCOLOR } from '../../../../theme';
import { IProduct } from '../../../../types/product';

// TODO: move to constants
const BLANK_IMAGE_URL = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const ProductRow = ({ item }: { item: IProduct }) => {
  return (
    <View style={styles.container}>
      {item.images[0] && (
        <Image
          alt=""
          source={{ uri: item.images[0].src !== undefined ? item.images[0].src : BLANK_IMAGE_URL }}
          width={60}
          height={60}
        />
      )}
      <View style={{ marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ fontWeight: 'bold', width: 250 }}>
          {item.name}
        </Text>
        <View style={{ marginBottom: 8 }} />
        <Text>Product group - $5</Text>
        <View style={{ marginBottom: 8 }} />
        <View
          style={{
            backgroundColor: PRIMARYCOLOR,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            height: 20,
            width: 100,
          }}>
          <Text style={{ color: 'white', fontSize: 9 }}>
            19.03.2024 qty: 20
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GRAY_02,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default ProductRow;
