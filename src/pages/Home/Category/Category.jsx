import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h4 className='text-start'>This category has: {categoryNews.length}</h4>}
            {
                categoryNews.map(cnews => <NewsCard
                    key={cnews._id}
                    cnews={cnews}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;