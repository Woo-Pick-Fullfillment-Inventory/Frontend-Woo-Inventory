import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { productService } from '../services/productService';
import * as Keychain from 'react-native-keychain';
import { delayCallback } from '../utils';
import { isApiValidationErrorResponse } from '../constants';
import { RootStackParamList } from '../App';
import { GRAY_03, LARGE_SIZE, PRIMARYCOLOR } from '../theme';

const DataSyncingScreen = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const [syncedMessage, setSyncedMessage] = useState("");

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchDataSyncing = async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (!credentials || !credentials.password) throw new Error("No jwtToken found");
  
        const result = await productService.areProductsSynced(credentials.password);
        
        if (result && result.data && result.data.are_products_synced === false) {
          await productService.productSync({ action: "sync-products" }, credentials.password);
          setSyncedMessage("Data Synced Done");
          delayCallback(() => navigation.navigate("MainMenuScreen"),2000);
        } else {
          setSyncedMessage("Data Syned Done");
          delayCallback(() => navigation.navigate("MainMenuScreen"),2000);
          setIsLoading(false); 
        }

      } catch (error) {
        setIsLoading(false);
        isApiValidationErrorResponse(error)
          ? Alert.alert('Error ', error.message)
          : Alert.alert('Error');
      }
    };
  
    fetchDataSyncing();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={LARGE_SIZE} color={PRIMARYCOLOR} />
          <Text>Data Syncing...</Text>
        </View>
      ) : (
        <Text style={styles.syncedMessageText}>{syncedMessage}</Text> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    syncedMessageText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: GRAY_03,
      marginTop: 20,
    },
  });

export default DataSyncingScreen;
