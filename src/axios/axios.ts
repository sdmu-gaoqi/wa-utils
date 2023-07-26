import axios, {
  AxiosHeaders,
  AxiosInstance,
  CreateAxiosDefaults,
  RawAxiosRequestHeaders,
} from 'axios';

export enum RequestType {
  form = 'multipart/form-data',
  json = 'application/json; charset=utf-8',
  htmlForm = 'application/x-www-form-urlencoded',
  stream = 'application/octet-stream',
}

const defaultHeads: RawAxiosRequestHeaders | AxiosHeaders = {
  'Content-Type': RequestType.json,
};

interface RequestOption extends CreateAxiosDefaults {
  baseUrl: string;
}

class request {
  instence: AxiosInstance;
  constructor(option: RequestOption) {
    const { baseUrl, timeout = 5000 } = option;
    this.instence = axios.create({
      baseURL: baseUrl,
      timeout,
      headers: {
        ...defaultHeads,
      },
    });
  }
}

export default request;
