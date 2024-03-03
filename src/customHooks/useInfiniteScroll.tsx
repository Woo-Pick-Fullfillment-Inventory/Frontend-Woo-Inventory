import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';

interface IUseInfiniteScroll {
  queryKey: QueryKey;
  fetchPage: (pageParam: number) => Promise<any>;
  options?: any;
  currentPage: number;
}

const UseInfiniteScroll = ({
  queryKey,
  fetchPage,
  options,
  currentPage,
}: IUseInfiniteScroll) => {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isFetchingNextPage,
    ...result
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }: { pageParam: number }) => fetchPage(pageParam),
    ...options,
    getNextPageParam: (lastPage: any) => lastPage.hasNextPage,
  });

  return {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isFetchingNextPage,
    ...result,
  };
};

export default UseInfiniteScroll;
