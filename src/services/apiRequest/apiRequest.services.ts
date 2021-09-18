import axios, { AxiosRequestConfig } from 'axios';
import {
  ApiRequestInterface,
  DataUserInteface,
  PayloadJWTInterface,
} from './apiRequest.entity';
import jwtDecode from 'jwt-decode';

const { NODE_ENV } = process.env;

let isRefreshing = false;

const api = axios.create({
  responseType: 'json',
});

// HANDLE REQUEST WITH JWT
/*
  const getRefreshToken = async () => {
    isRefreshing = true;
    let authResponse = await api.request({
      url: '/accounts/login',
      method: 'POST',
      headers: {
        contentType: 'application/json',
      },
      data: {
        grantType: 'guest',
      },
    });
    localStorage.setItem('userData', JSON.stringify(authResponse.data));
    isRefreshing = false;
    return authResponse.data;
  };

  api.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      if (RegExp(/^\/accounts/).test(config.url)) {
        console.log('one');
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Basic `,
          },
        };
      }
      if (isRefreshing) {
        await new Promise((resolve, reject) => {
          const requestInterval = setInterval(() => {
            if (!isRefreshing) {
              clearInterval(requestInterval);
              resolve(true);
            }
          }, 1000);
        });
      }
      let dataUser: DataUserInteface = JSON.parse(
        localStorage.getItem('userData') || '{}'
      );
      if (!dataUser.accessToken) {
        dataUser = await getRefreshToken();
      } else {
        const payload: PayloadJWTInterface = jwtDecode(dataUser.accessToken);
        if (
          new Date(payload?.exp * 1000).getTime() - new Date().getTime() <=
          10 * 1000
        ) {
          dataUser = await getRefreshToken();
        }
      }
      if (dataUser.accessToken) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${dataUser.accessToken}`,
          },
        };
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
*/

export const apiRequest = async ({
  dispatch,
  actionType,
  method,
  url,
  data,
  contentType = 'application/json',
  onFailure,
  onSuccess,
  baseURL = '/api',
}: ApiRequestInterface) => {
  dispatch({ type: `${actionType}_REQUEST` });
  const dataOrParams = ['get', 'delete'].includes(method.toLowerCase())
    ? 'params'
    : 'data';
  try {
    let response = await api.request({
      url,
      baseURL,
      method,
      headers: {
        'content-type': contentType,
      },
      [dataOrParams]: data,
    });

    // log API Request in development. disable on staging and production
    if (NODE_ENV === 'development') {
      console.log(`${actionType}_RESPONSE: `, response.data);
    }
    if (onSuccess) onSuccess(response.data);
    return dispatch({
      type: `${actionType}_SUCCESS`,
      payload: response.data,
    });
  } catch (error) {
    if (onFailure) onFailure(error);
    return dispatch({
      type: `${actionType}_FAILURE`,
      payload: error,
    });
  }
};
