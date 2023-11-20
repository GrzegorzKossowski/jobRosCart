import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LocalCartProductType, CartProductType, ProductType } from '../types';
import { getProductsByIdApi } from '../api/productApi';

export const fetchStorageData = createAsyncThunk(
    'cart/fetchStorageData',
    async () => {
        let ids: number[] = [];
        let pcs: number[] = [];
        const localProducts = localStorage.getItem('cart');
        if (localProducts) {
            JSON.parse(localProducts).forEach((pr: LocalCartProductType) => {
                ids.push(pr.id);
                pcs.push(pr.amount);
            });
            if (ids.length > 0) {
                try {
                    const response = await getProductsByIdApi(ids);
                    const data = await response.data;
                    const parsedData = data.map(
                        (
                            product: ProductType,
                            index: number
                        ): CartProductType => {
                            const { id, name, pictures, caption, unit, price } =
                                product;
                            const picture = pictures[0].small;
                            return {
                                id,
                                name,
                                picture,
                                caption,
                                unit,
                                price,
                                amount: pcs[index],
                            };
                        }
                    );
                    return parsedData;
                } catch (error) {
                    // TODO: implement error handling
                    console.log(error);
                }
            }
        }
        return [];
    }
);

const initialState = { products: [] } as { products: CartProductType[] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProductType>) => {
            const product = action.payload;
            const existItem = state.products.find(
                (x: CartProductType) => x.id === product.id
            );
            if (!existItem) {
                state.products.push(product);
                updateLocalStore(state);
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const existItem = state.products.find(
                (x: CartProductType) => x.id === productId
            );
            if (existItem) {
                state.products = state.products.filter(
                    (product: CartProductType) => product.id !== productId
                );
                updateLocalStore(state);
            }
        },
        increaseProductAmount: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            state.products = state.products.map(product => {
                if (productId === product.id)
                    return { ...product, amount: product.amount + 1 };
                return product;
            });
            updateLocalStore(state);
        },
        decreaseProductAmount: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            state.products = state.products.map(product => {
                if (productId === product.id)
                    return { ...product, amount: product.amount - 1 };
                return product;
            });
            updateLocalStore(state);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchStorageData.fulfilled, (state, action) => {
            state.products = [...state.products, ...action.payload];
        });
    },
});

function updateLocalStore(state: { products: CartProductType[] }) {
    const storeProducts: LocalCartProductType[] = state.products.map(
        (product: LocalCartProductType) => {
            return { id: product.id, amount: product.amount };
        }
    );
    localStorage.setItem('cart', JSON.stringify(storeProducts));
}

export const {
    addProduct,
    removeProduct,
    increaseProductAmount,
    decreaseProductAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
