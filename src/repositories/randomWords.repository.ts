import { ApiUrls } from '../constants/apiUrls.enum';
import { apiClient } from './apiClient';

export const getRandomWords = async (): Promise<string[]> => {
  const response = await apiClient.get(`${ApiUrls.GetRandomWords}`);
  return response.data;
};
