import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PRIMARYCOLOR } from '../../../../theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface IFloatingBar {
  onDownload: () => void;
  onAdd: () => void;
  onSearch: () => void;
  onSort: () => void;
  onFilter: () => void;
}

const FloatingBar = ({
  onDownload,
  onAdd,
  onSearch,
  onSort,
  onFilter,
}: IFloatingBar) => {
  return (
    <View style={styles.floatingBar}>
      <TouchableOpacity onPress={onDownload}>
        <AntDesignIcon name="download" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onAdd}>
        <MaterialIcon name="add-circle-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSearch}>
        <MaterialIcon name="search" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSort}>
        <MaterialIcon name="sort" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onFilter}>
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
    paddingHorizontal: 20,
  },
});

export default FloatingBar;
