import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import UseInfiniteScroll from '../../customHooks/useInfiniteScroll';
import { productService } from '../../services/productService';
import { utils } from '../../utils';
import ProductRow from './ProductRow';

const ProductsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async (page = 1) => {
    console.log('🚀 ~ fetchData ~ page:hihi1', page);
    try {
      const res = await productService.getProducts(page);
      return res.data;
    } catch (error) {
      utils.notifyError(error);
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
    currentPage,
  });
  console.log('🚀 ~ ProductsScreen ~ data:', data);

  const loadMore = () => {
    console.log('loadddddddddd');
    console.log('🚀 ~ loadMore ~ hasNextPage:', hasNextPage);

    if (hasNextPage && !isFetching) {
      setCurrentPage(currentPage + 1), fetchNextPage();
    }
    fetchNextPage();
  };

  // useEffect(() => {
  //   fetchData().then(res => {
  //     console.log('🚀 ~ ProductsScreen ~ res:', res);
  //   });
  // }, []);

  return (
    <SafeAreaView style={{ margin: 20 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data?.pages.flatMap((item: any) => item.products)}
          renderItem={({ item }) => (
            <ProductRow
              // index={index}
              item={item}
              // onDelete={() => {
              //   setDeleteItem(item);
              //   setIsOpenAcceptModal(true);
              // }}
              // onEdit={() => {
              //   navigation.push(routesObj.KeHoachTXKHAddEdit.path, {
              //     id: item.id,
              //   });
              // }}
            />
          )}
          // keyExtractor={(_, index) => index}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator /> : null
          }
        />
      )}
    </SafeAreaView>
  );
};

export default ProductsScreen;
