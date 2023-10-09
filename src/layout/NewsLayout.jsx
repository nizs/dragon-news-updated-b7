import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import NewsGrid from './NewsGrid';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <NewsGrid></NewsGrid>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;