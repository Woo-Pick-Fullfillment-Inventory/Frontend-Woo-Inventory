import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { IProductsAPIResponse } from '../types/product';

interface IUseInfiniteScroll {
  queryKey: QueryKey;
  fetchPage: (pageParam: {
    last_product?: number | string;
  }) => Promise<IProductsAPIResponse>;
  options?: any;
}

const UseInfiniteScroll = ({
  queryKey,
  fetchPage,
  options,
}: IUseInfiniteScroll) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, ...rest } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({
        pageParam,
      }: {
        pageParam: { last_product?: number | string };
      }) => fetchPage(pageParam),
      getNextPageParam: (lastPage: IProductsAPIResponse) => ({
        last_product: lastPage?.last_product || '',
      }),
      ...options,
    });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...rest,
  };
};

export default UseInfiniteScroll;
