import { Method } from 'axios';

import { DispatchType } from 'src/redux';

export interface ApiRequestInterface {
  dispatch: DispatchType;
  actionType: string;
  method: Method;
  url: string;
  data?: any;
  contentType?: string;
  baseURL?: string;
  onSuccess?: <T>(data: T) => {};
  onFailure?: <T>(data: T) => {};
}

export interface DataUserInteface {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
}

export interface PayloadJWTInterface {
  grant_type: string;
  site_code: string;
  iat: number;
  exp: number;
}
