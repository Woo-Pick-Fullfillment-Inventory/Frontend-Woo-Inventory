import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import UseInfiniteScroll from '../../customHooks/useInfiniteScroll';
import { productService } from '../../services/productService';
import { notifyError } from '../../utils';
import ProductRow from './ProductRow';

const ProductsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryData, setQueryData] = useState({
    sorting_criteria: {
      field: 'id',
      direction: 'asc',
    },
    pagination_criteria: {
      limit: 10,
    },
  });

  const test = async () => {
    console.log('yooooo');

    try {
      console.log('tryyyyyyyyyyyyy');

      const response = await fetch(
        'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/products:search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjRkMThjZC1jMDNiLTQzNmEtODFhZC02Y2RhOTdjMjUyNWEiLCJpYXQiOjE3MDg5ODM2Mzl9.QtBi0AsrygH-rb2nXPNJtAKu-kdaJuSWm8xdAvafFp0',
          },
          body: JSON.stringify({
            sorting_criteria: {
              field: 'id',
              direction: 'asc',
            },
            pagination_criteria: {
              limit: 10,
            },
          }),
        },
      );

      console.log('🚀 ~ response:', response);
    } catch (error) {
      console.log('🚀 ~ error:', error);
    }
  };

  // const fetchData = async () => {
  //   console.log('fetch data deeeee');
  //   test();

  //   // try {
  //   //   const res = await productService.getProducts(queryData);
  //   //   console.log('🚀 ~ fetchData ~ res:', res);
  //   //   // return res.data;
  //   // } catch (error) {
  //   //   console.log('🚀 ~ fetchData ~ error:', error);
  //   //   notifyError(error);
  //   // }
  // };

  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  //   isFetching,
  // } = UseInfiniteScroll({
  //   queryKey: ['products'],
  //   fetchPage: fetchData,
  // });

  // const loadMore = () => {
  //   if (hasNextPage && !isFetching) {
  //     setCurrentPage(currentPage + 1), fetchNextPage();
  //   }
  //   fetchNextPage();
  // };

  useEffect(() => {
    test();
  }, []);

  return (
    <SafeAreaView style={{ margin: 20 }}>
      {/* {isLoading ? (
        // <ActivityIndicator />
        <Button title="Click" onPress={test} />
      ) : (
        // <FlatList
        //   data={data?.pages.flatMap((item: any) => item?.products)}
        //   renderItem={({ item }) => (
        //     <ProductRow
        //       // index={index}
        //       item={item}
        //       // onDelete={() => {
        //       //   setDeleteItem(item);
        //       //   setIsOpenAcceptModal(true);
        //       // }}
        //       // onEdit={() => {
        //       //   navigation.push(routesObj.KeHoachTXKHAddEdit.path, {
        //       //     id: item.id,
        //       //   });
        //       // }}
        //     />
        //   )}
        //   // keyExtractor={(_, index) => index}
        //   onEndReached={loadMore}
        //   onEndReachedThreshold={0}
        //   ListFooterComponent={
        //     isFetchingNextPage ? <ActivityIndicator /> : null
        //   }
        // />
        <></>
      )} */}
    </SafeAreaView>
  );
};

export default ProductsScreen;
