import { ApiUrls } from '../constants/apiUrls.enum';
import { WordDetails } from '../types/WordDetails.type';
import { apiClient } from './apiClient';

export const getWordDetails = async (
  word: string
): Promise<WordDetails[]> => {
  const response = await apiClient.get(
    ApiUrls.GetWordDetails.replace('{word}', word)
  );
  return response.data;
};
