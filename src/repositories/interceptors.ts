import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(
    onResponse,
    onResponseError
  );
  return axiosInstance;
}
