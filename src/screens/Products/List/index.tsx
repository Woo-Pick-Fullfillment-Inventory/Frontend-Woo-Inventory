import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native';
import UseInfiniteScroll from '../../../customHooks/useInfiniteScroll';
import { productService } from '../../../services/productService';
import { notifyError } from '../../../utils';
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
  };
}

const ProductListScreen = () => {
  const [lastProduct, setLastProduct] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
      console.log('🚀 ~ fetchData ~ res:', res);
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
    queryKey: ['products', queryData],
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
            keyExtractor={item => item?.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={
              isFetchingNextPage ? <ActivityIndicator /> : null
            }
            ListEmptyComponent={<Text>No Data</Text>}
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
