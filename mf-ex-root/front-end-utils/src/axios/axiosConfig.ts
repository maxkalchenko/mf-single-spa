import axios from 'axios';
import { RequestTypeWithData, RequestTypeWithoutData } from './types';

const REQUEST_CONTENT_TYPE = 'application/json';
const REQUEST_ACCEPT = 'application/json, text/javascript, */*; q=0.01';
const RELOGIN_URL = '/api/oauth2/authorization/todo';
const RELOGIN_URL_STS_CODE = 401;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = REQUEST_ACCEPT;
axios.defaults.headers.post['Content-Type'] = REQUEST_CONTENT_TYPE;

axios.interceptors.response.use(
  response => (response && response.data ? response.data : response),
  error => {
    if (error.response.status === RELOGIN_URL_STS_CODE && window.location.pathname !== RELOGIN_URL) {
      window.location.href = RELOGIN_URL;
    }

    return Promise.reject(error);
  },
);

export function httpGet(url: string, ...arg: RequestTypeWithoutData) {
  return axios.get.apply(null, [`/api/${url}`, ...arg]);
}

export function httpPut(url: string, ...arg: RequestTypeWithData) {
  return axios.put.apply(null, [`/api/${url}`, ...arg]);
}

export function httpPost(url: string, ...arg: RequestTypeWithData) {
  return axios.post.apply(null, [`/api/${url}`, ...arg]);
}

export function httpDelete(url: string, ...arg: RequestTypeWithoutData) {
  return axios.delete.apply(null, [`/api/${url}`, ...arg]);
}
