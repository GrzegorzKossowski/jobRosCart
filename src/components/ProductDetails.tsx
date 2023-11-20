import { CartProductType } from '../types';
import { useAppDispatch } from '../redux/storeHooks';
import {
    increaseProductAmount,
    decreaseProductAmount,
    removeProduct,
} from '../redux/cart';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';
import TrashIcon from './icons/TrashIcon';
import { useCallback } from 'react';

const ProductDetails = ({
    id,
    name,
    picture,
    caption,
    unit,
    price,
    amount,
}: CartProductType) => {
    const dispatch = useAppDispatch();
    const handleDelete = useCallback(() => {
        dispatch(removeProduct(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleIncrease = useCallback(() => {
        dispatch(increaseProductAmount(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleDecrease = useCallback(() => {
        dispatch(decreaseProductAmount(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className='flex items-center space-x-4'>
            <div className=''>
                <img
                    className='w-[100px] h-[100px] object-contain'
                    src={picture}
                    alt=''
                />
            </div>
            <div className='flex-1'>
                <div>{name.toUpperCase()}</div>
                <div>
                    {caption}, {unit}
                </div>
                <div>{id}</div>
            </div>
            <div className='ml-auto flex items-center space-x-4'>
                {amount > 1 ? (
                    <button className='cursor-pointer' onClick={handleDecrease}>
                        <MinusIcon />
                    </button>
                ) : (
                    <button className='cursor-pointer' onClick={handleDelete}>
                        <TrashIcon />
                    </button>
                )}
                <div
                    className='flex justify-center rounded-full p-2 bg-red-500 text-white font-semibold shadow-sm'
                    style={{ minWidth: '2.6rem', minHeight: '2.6rem' }}
                >
                    <div className='self-center'>{amount}</div>
                </div>
                <button className='cursor-pointer' onClick={handleIncrease}>
                    <PlusIcon />
                </button>
                <div>{(price * amount).toFixed(2)} zł</div>
            </div>
        </div>
    );
};

export default ProductDetails;
