import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import GridLayout from '../layout/GridLayout';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <GridLayout></GridLayout>
            <Footer></Footer>
        </div>
    );
};

export default Main;