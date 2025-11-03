import React, { use } from 'react';
import AllProductCard from './AllProductCard';

const AllProductLayout = ({productPromise}) => {
    const allProduct = use(productPromise) ;
    // console.log(allProduct) ;
    return (
        <>
            <div className='grid grid-cols-1  gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-10/12 mx-auto'>
                {
                    allProduct.map(data => <AllProductCard key={data._id} data={data}></AllProductCard>)
                }
            </div>
        </>
    );
};

export default AllProductLayout;