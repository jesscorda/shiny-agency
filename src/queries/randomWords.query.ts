import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../constants/queries.enum';
import { getRandomWords } from '../repositories/randomWords.repository';

export const useRandomWords = (enabled: boolean) => {
  const {
    data,
    isLoading,
    error,
    isError,
    isLoadingError,
    refetch
  } = useQuery({
    queryKey: [QueryKeys.GetRandomWords],
    queryFn: getRandomWords,
    enabled
  });

  return {
    data,
    isLoading,
    error,
    isError,
    isLoadingError,
    refetch
  };
};
