import React, { use } from 'react';
import ProductCard from './ProductCard'
import { Link } from 'react-router';

const RecentCard = ({ prodctPromise }) => {
    const allRecentData = use(prodctPromise);
    // console.log(allRecentData) ;
    return (
        <>
            <div className='grid grid-cols-1  gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-10/12 mx-auto'>
                {
                    allRecentData.map(data => <ProductCard key={data._id} data={data}></ProductCard>)
                }
            </div>
            <div className='flex justify-center mt-5'>
                <Link to={'/allproduct'}>
                 <button className='btn btn-primary'>Show All</button>
                </Link>

            </div>
        </>

    );
};

export default RecentCard;