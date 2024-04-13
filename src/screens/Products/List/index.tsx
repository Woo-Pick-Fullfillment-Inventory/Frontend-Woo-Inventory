import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import UseInfiniteScroll from 'src/customHooks/useInfiniteScroll';
import { productService } from 'src/services/productService';
import { notifyError } from 'src/utils';
import FloatingBar from '../components/FloatingBar';
import ProductRow from '../components/ProductRow';
import SortActionSheet from './components/SortActionSheet';

export interface IQueryData {
  sorting_criteria: {
    field: string;
    direction: string;
  };
  pagination_criteria: {
    limit: number;
    last_product?: number | string;
  };
}

const ProductListScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [queryData, setQueryData] = useState<IQueryData>({
    sorting_criteria: {
      field: 'id',
      direction: 'asc',
    },
    pagination_criteria: {
      limit: 10,
    },
  });

  const fetchPage = async (pageParam: { last_product?: number | string }) => {
    const queryParams = {
      ...queryData,
      pagination_criteria: {
        limit: 10,
        last_product: pageParam?.last_product,
      },
    };
    try {
      const res = await productService.getProducts(queryParams);
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
    queryKey: ['products', queryData],
    fetchPage,
  });

  const loadMore = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView style={{ margin: 20 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            data={data?.pages.flatMap((item: any) => item?.products)}
            renderItem={({ item }) => <ProductRow item={item} />}
            keyExtractor={item => item?.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={
              isFetchingNextPage ? <ActivityIndicator /> : null
            }
            ListEmptyComponent={
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: Dimensions.get('screen').height - 250,
                }}>
                <Text>No Data</Text>
              </View>
            }
          />
          <FloatingBar
            onAdd={() => console.log('add')}
            onDownload={() => console.log('download')}
            onFilter={() => console.log('filter')}
            onSearch={() => console.log('search')}
            onSort={() => setIsOpen(true)}
          />
        </>
      )}
      {isOpen && (
        <SortActionSheet
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setQueryData={setQueryData}
          queryData={queryData}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;
