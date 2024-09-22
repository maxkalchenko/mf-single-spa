import { AxiosRequestConfig } from 'axios';

export type RequestTypeWithData = [data?: unknown, config?: AxiosRequestConfig<unknown> | undefined];
export type RequestTypeWithoutData = [config?: AxiosRequestConfig<unknown> | undefined];
