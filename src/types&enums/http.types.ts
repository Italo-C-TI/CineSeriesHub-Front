import { AxiosError } from "axios";

export enum HttpStatusCodes {
  OK = 200,
  BADREQUEST = 400,
  NOTFOUND = 404,
  SERVERERROR = 500,
}

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export type HttpResponse<T = any> = {
    body: T;
    status: number;
    error?: AxiosError;
  };

export type HttpRequest = {
    url: string;
    method: HttpMethods;
    body?: any;
    params?: any;
  };
  
