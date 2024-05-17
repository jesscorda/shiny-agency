import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

export const apiClient = axios.create();
setupInterceptorsTo(apiClient);
