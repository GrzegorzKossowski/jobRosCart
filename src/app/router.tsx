import { Suspense, lazy } from 'react';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import HomePage from '../pages/HomePage';
const StorePage = lazy(() => import('../pages/StorePage'));
const CartPage = lazy(() => import('../pages/CartPage'));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index={true} element={<HomePage />} />
            <Route
                path='store'
                element={
                    <Suspense fallback={<>Loading chunk...</>}>
                        <StorePage />
                    </Suspense>
                }
            />
            <Route
                path='cart'
                element={
                    <Suspense fallback={<>Loading chunk...</>}>
                        <CartPage />
                    </Suspense>
                }
            />
            <Route path='*' element={<>404 not found</>} />
        </Route>
    )
);
