import { useGetProducts } from '../api/productHooks';
import ProductCard from '../components/ProductCard';
import { ProductType } from '../types';

const StorePage = () => {
    const { products, loading, error } = useGetProducts();

    if (error) return <div>Error</div>;
    if (loading) return <div>Loading store...</div>;

    return (
        <div className='border p-4 mb-6'>
            {products.length !== 0 ? (
                <div className='flex flex-wrap gap-8'>
                    {products.map((product: ProductType) => {
                        return <ProductCard key={product.id} {...product} />;
                    })}
                </div>
            ) : (
                <div>no products</div>
            )}
        </div>
    );
};

export default StorePage;
