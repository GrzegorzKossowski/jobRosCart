import { mockData } from './mockData';
import { requestApi } from './requestApi';

export const getProductsApiMock = () => {
    return requestApi(mockData);
};

export const getProductsByIdApiMock = () => {
    return requestApi(mockData);
};
