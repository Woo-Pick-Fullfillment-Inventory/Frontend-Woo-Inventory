import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';

interface IUseInfiniteScroll {
  queryKey: QueryKey;
  fetchPage: (pageParam: number) => Promise<any>;
  options?: any;
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
      ...options,
      getNextPageParam: (lastPage: any) => lastPage.products.length > 0,
    });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...result,
  };
};

export default UseInfiniteScroll;
