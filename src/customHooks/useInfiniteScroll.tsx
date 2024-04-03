import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { IProductsAPIResponse } from '../types/product';

interface IUseInfiniteScroll {
  queryKey: QueryKey;
  fetchPage: (pageParam: number) => Promise<IProductsAPIResponse>;
  options?: any,
}

const UseInfiniteScroll = ({
  queryKey,
  fetchPage,
  options,
}: IUseInfiniteScroll) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, ...result } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
        fetchPage(pageParam),
      getNextPageParam: (lastPage: IProductsAPIResponse) => lastPage.products.length > 0,
      ...options,
    });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...result,
  };
};

export default UseInfiniteScroll;
