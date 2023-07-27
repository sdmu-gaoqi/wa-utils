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

class Request {
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
    // this.instence.interceptors.response.use((res) => {
    //   // 默认的
    // });
  }
}

// interceptors.response.use

export default Request;
