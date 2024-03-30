import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PRIMARYCOLOR } from '../../../../theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const FloatingBar = () => {
  return (
    <View style={styles.floatingBar}>
      <TouchableOpacity
        style={styles.floatingItem}
        onPress={() => {
          console.log();
        }}>
        <AntDesignIcon name="download" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.floatingItem}
        onPress={() => {
          console.log();
        }}>
        <MaterialIcon name="add-circle-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.floatingItem}
        onPress={() => {
          console.log();
        }}>
        <MaterialIcon name="search" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.floatingItem}
        onPress={() => {
          console.log();
        }}>
        <MaterialIcon name="sort" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.floatingItem}
        onPress={() => {
          console.log();
        }}>
        <MaterialIcon name="filter-alt" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingBar: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: PRIMARYCOLOR,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 30,
    padding: 10,
  },
  floatingItem: {
    marginHorizontal: 20,
  },
});

export default FloatingBar;
