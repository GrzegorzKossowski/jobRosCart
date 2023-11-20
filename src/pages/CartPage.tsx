import { useAppSelector } from '../redux/storeHooks';
import ProductDetails from '../components/ProductDetails';
import { CartProductType } from '../types';

const CartPage = () => {
    const products = useAppSelector(state => state.cart.products);

    return (
        <div className='w-[900px] m-auto'>
            {products.length === 0 ? (
                <div>Empty cart</div>
            ) : (
                <div className='w-full mt-10 space-y-4'>
                    {products.map((product: CartProductType) => (
                        <ProductDetails {...product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
