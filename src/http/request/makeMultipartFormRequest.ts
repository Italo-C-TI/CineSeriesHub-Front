import { AxiosRequestConfig } from 'axios';
import { HttpRequest } from '../../types&enums/http.types';

export function makeMultipartFormRequest(httpRequest: HttpRequest): AxiosRequestConfig {
  return {
    data: mapBodyToMultipartForm(httpRequest.body),
    headers: makeHeaders(),
    method: httpRequest.method,
    url: httpRequest.url,
    params: httpRequest.params,
  };
}

function mapBodyToMultipartForm(body: any) {
  const form = new FormData();

  for (const key in body) {
    form.append(key, body[key]);
  }

  return form;
}

function makeHeaders() {
  return { 'Content-Type': 'multipart/form-data' };
}
