import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/storeHooks';
import { fetchStorageData } from '../redux/cart';

const RootLayout = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchStorageData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NavBar />
            <div className='container flex m-auto'>
                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;
