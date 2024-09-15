import axios, { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TODO_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class HTTPService {
  static get(path = ''): Promise<AxiosResponse> {
    return axiosInstance
      .get(`${path}`)
      .then((response: AxiosResponse) => response)
      .catch(err => {
        throw new Error(err);
      });
  }

  static post<T = never, R = AxiosResponse<T>>(path: string, data: T): Promise<R> {
    return axiosInstance
      .post(`${path}`, data)
      .then((response: AxiosResponse) => response.data)
      .catch(err => {
        throw new Error(err);
      });
  }

  static patch<T = never, R = AxiosResponse<T>>(path: string, data: T): Promise<R> {
    return axiosInstance
      .patch(`${path}`, data)
      .then((response: AxiosResponse) => response.data)
      .catch(err => {
        throw new Error(err);
      });
  }

  static delete<T = never>(path: string): Promise<AxiosResponse<T>> {
    return axiosInstance
      .delete<T>(path)
      .then((response: AxiosResponse<T>) => {
        return response;
      })
      .catch(err => {
        console.error(err);
        return Promise.reject(err);
      });
  }
}
