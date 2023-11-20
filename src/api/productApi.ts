import axios from 'axios';
import { URL, useApiMocks } from './config';
import { getProductsApiMock, getProductsByIdApiMock } from './productApiMock';

const instance = axios.create({
    baseURL: 'https://www.rossmann.pl/products/api',
});

export const getProductsApi = () => {
    return useApiMocks
        ? getProductsApiMock()
        : instance.get('/Products').then(response => {
              return response.data;
          });
};

export const getProductsByIdApi = (ids: number[]) => {

    if (Array.isArray(ids) && ids.length === 0) return undefined;
    
    return useApiMocks
        ? getProductsByIdApiMock()
        : instance
              .get(`/Products?${ids.map(n => `ids=${n}`).join('&')}`)
              .then(response => {
                  return response.data;
              });
};
