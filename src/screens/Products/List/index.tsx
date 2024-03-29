import UseInfiniteScroll from '../../../customHooks/useInfiniteScroll';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { productService } from '../../../services/productService';
import { notifyError } from '../../../utils';
import ProductRow from '../components/ProductRow';
import { PRIMARYCOLOR } from '../../../theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ProductListScreen = () => {
  const [lastProduct, setLastProduct] = useState('');
  const [queryData, setQueryData] = useState({
    sorting_criteria: {
      field: 'id',
      direction: 'asc',
    },
    pagination_criteria: {
      limit: 10,
    },
  });

  const fetchData = async () => {
    try {
      const res = await productService.getProducts(queryData);
      setLastProduct(res.data.last_product);
      return res.data;
    } catch (error) {
      notifyError(error);
    }
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = UseInfiniteScroll({
    queryKey: ['products'],
    fetchPage: fetchData,
  });

  const loadMore = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    setQueryData(prev => ({
      ...prev,
      pagination_criteria: {
        ...prev.pagination_criteria,
        last_product: lastProduct,
      },
    }));
  }, [lastProduct]);

  return (
    <SafeAreaView style={{ margin: 20 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data?.pages.flatMap((item: any) => item?.products)}
          renderItem={({ item }) => <ProductRow item={item} />}
          keyExtractor={item => item.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator /> : null
          }
        />
      )}
      <View style={styles.floatingBar}>
        <TouchableOpacity style={styles.floatingItem} onPress={() => {}}>
          <AntDesignIcon name="download" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingItem} onPress={() => {}}>
          <MaterialIcon name="add-circle-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingItem} onPress={() => {}}>
          <MaterialIcon name="search" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingItem} onPress={() => {}}>
          <MaterialIcon name="sort" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingItem} onPress={() => {}}>
          <MaterialIcon name="filter-alt" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

export default ProductListScreen;
