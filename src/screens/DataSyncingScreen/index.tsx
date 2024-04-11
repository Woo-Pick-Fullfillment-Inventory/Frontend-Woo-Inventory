import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { isApiValidationErrorResponse } from 'src/constants';
import { productService } from 'src/services/productService';
import { LARGE_SIZE, PRIMARYCOLOR, GRAY_03 } from 'src/theme';
import { RootStackParamList } from 'src/types/navigation';
import { delayCallback } from 'src/utils';
import * as Keychain from 'react-native-keychain';

const DataSyncingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [syncedMessage, setSyncedMessage] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchDataSyncing = async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (!credentials || !credentials.password)
          throw new Error('No jwtToken found');

        const result = await productService.areProductsSynced(
          credentials.password,
        );

        if (
          result &&
          result.data &&
          result.data.are_products_synced === false
        ) {
          await productService.productSync(
            { action: 'sync-products' },
            credentials.password,
          );
          setSyncedMessage('Data Synced Done');
          delayCallback(() => navigation.navigate('MainMenuScreen'), 2000);
        } else {
          setSyncedMessage('Data Syned Done');
          delayCallback(() => navigation.navigate('MainMenuScreen'), 2000);
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
