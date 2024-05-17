import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../constants/queries.enum';
import { getWordDetails } from '../repositories/wordDetails.repository';

export const useWordDetails = (word: string = '') => {
  const {
    data,
    isLoading,
    error,
    isError,
    isLoadingError,
    refetch
  } = useQuery({
    queryKey: [QueryKeys.GetWordDetails],
    queryFn: () => getWordDetails(word)
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
