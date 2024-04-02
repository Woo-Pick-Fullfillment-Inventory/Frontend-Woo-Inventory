import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import UseInfiniteScroll from '../../../customHooks/useInfiniteScroll';
import { productService } from '../../../services/productService';
import { notifyError } from '../../../utils';
import FloatingBar from '../components/FloatingBar';
import ProductRow from '../components/ProductRow';

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
        <>
          <FlatList
            data={data?.pages.flatMap((item: any) => item?.products)}
            renderItem={({ item }) => <ProductRow item={item} />}
            keyExtractor={item => item.id}
            onEndReached={loadMore}
<<<<<<< HEAD
            onEndReachedThreshold={0}
=======
            onEndReachedThreshold={50}
>>>>>>> 41d3ee7c3f55ce219e1e1e7872c9b3f05e7aa669
            ListFooterComponent={
              isFetchingNextPage ? <ActivityIndicator /> : null
            }
          />
<<<<<<< HEAD
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
=======
          <FloatingBar />
>>>>>>> 41d3ee7c3f55ce219e1e1e7872c9b3f05e7aa669
        </>
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;
