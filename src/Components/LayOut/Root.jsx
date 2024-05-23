import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            {/* header  */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer/>
            {/* footer  */}
        </div>
    );
};

export default Root;