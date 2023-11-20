import { ProductType } from '../types';
import CartIcon from './icons/CartIcon';
import { useAppDispatch } from '../redux/storeHooks';
import { addProduct } from '../redux/cart';
import { useCallback } from 'react';

const ProductCard = ({
    id,
    name,
    pictures,
    caption,
    unit,
    rossnetId,
    pricePerUnit,
    price,
}: ProductType) => {
    const picture = pictures[0].small;
    const dispatch = useAppDispatch();
    const handleAddProduct = useCallback(() => {
        const product = {
            id,
            name,
            picture,
            caption,
            unit,
            price,
            amount: 1,
        };
        dispatch(addProduct(product));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [caption, id, name, picture, price, unit]);

    function priceFormatter(price: number) {
        const integerPart = Math.floor(price);
        const fractionalPart = price - integerPart;

        return {
            integer: integerPart,
            fractional: fractionalPart.toFixed(2).slice(2, 4),
        };
    }
    return (
        <div className='flex flex-col max-w-[350px] border shadow-md p-4 space-y-4'>
            <div className='relative p-8 bg-slate-200'>
                <img
                    className='w-[200px] h-[200px] object-contain'
                    src={picture}
                    alt={name}
                />
                <button
                    className='absolute top-4 right-4 z-10 bg-white rounded-full p-3 self-center hover:cursor-pointer shadow-md active:bg-red-200 '
                    onClick={handleAddProduct}
                >
                    <CartIcon width={32} height={32} />
                </button>
            </div>
            <div className='flex flex-1 flex-row border space-x-4'>
                <div className='text-right'>
                    {name}, {caption}, {unit}, nr kat. {rossnetId}
                </div>
                <div className='flex flex-col justify-end items-center'>
                    <div className='text-5xl font-bold text-red-500'>
                        {priceFormatter(price).integer}
                        <sup>
                            <small className='text-xl'>
                                {priceFormatter(price).fractional}
                            </small>
                        </sup>
                    </div>
                    <div className='whitespace-nowrap'>{pricePerUnit}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
