import { useEffect, useMemo, useState } from 'react';
import { getProductsApi } from './productApi';
import { ProductType } from '../types';

export const useGetProducts = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await getProductsApi();
                const data = await response.data;
                const isArr = Array.isArray(data.products);
                if (isArr) {
                    setProducts(data.products);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        };
        fetchProducts();
    }, []);

    return useMemo(() => {
        return {
            products,
            loading,
            error,
        };
    }, [products, loading, error]);
};
