import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ marginRight: 4 }} />
      <TouchableOpacity onPress={() => {}}>
        <MaterialIcons name="messenger-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ marginRight: 4 }} />
      <TouchableOpacity onPress={() => {}}>
=======
      <TouchableOpacity
        onPress={() => {
          console.log();
        }}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ marginRight: 4 }} />
      <TouchableOpacity
        onPress={() => {
          console.log();
        }}>
        <MaterialIcons name="messenger-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ marginRight: 4 }} />
      <TouchableOpacity
        onPress={() => {
          console.log();
        }}>
>>>>>>> 41d3ee7c3f55ce219e1e1e7872c9b3f05e7aa669
        <AntDesign name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HeaderRight;
