import axios, { AxiosResponse } from 'axios';
import { HttpRequest, HttpResponse } from '../../types&enums/http.types';

export async function request<T>(httpRequest: HttpRequest): Promise<HttpResponse<T>> {
  try {
    const apiResponse: AxiosResponse<T> = await axios.request(httpRequest);

    return {
      body: apiResponse?.data,
      status: apiResponse?.status,
    };
  } catch (error: any) {

    return {
      status: error.response.status,
      body: error.response.data,
      error,
    };
  }
}
