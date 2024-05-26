import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes } from './Routes';
// import ScrollToTop from '../components/scrollToTop/ScrollToTop';

const AppRouter = () => {

    const isAuth = true;
    const authRoutesWithKeys = authRoutes.map(({ path, Component }, index) => (
        <Route key={`authRoute-${index}`} path={path} element={Component} exact />
    ));

    return (
        <>
            {/* <ScrollToTop /> */}
            <Routes>
                {isAuth === true && authRoutesWithKeys}
            </Routes>
        </>
    );
};

export default AppRouter;