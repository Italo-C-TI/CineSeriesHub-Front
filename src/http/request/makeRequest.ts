import { AxiosRequestConfig } from 'axios';
import { HttpRequest } from '../../types&enums/http.types';

export function makeRequest(httpRequest: HttpRequest): AxiosRequestConfig {
  return {
    data: httpRequest.body,
    method: httpRequest.method,
    url: httpRequest.url,
    params: httpRequest.params,
  };
}
