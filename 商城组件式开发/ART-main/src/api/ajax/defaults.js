import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from './constants.js';

export const DEFAULTS = {
  method: HTTP_GET,
  params: null,
  data: null,

  contentType: CONTENT_TYPE_FORM_URLENCODED,
  responseType: '',
  withCredentials: false,
  timeoutTime: 0,

  success() {},
  httpCodeError() {},
  error() {},
  abort() {},
  timeout() {}
};
