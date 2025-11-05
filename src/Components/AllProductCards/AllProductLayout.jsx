import React, { use, useEffect } from 'react';
import AllProductCard from './AllProductCard';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const AllProductLayout = ({productPromise}) => {
    // const allProductsss = use(productPromise) ;
    
    // console.log(allProduct) ;
    const {allProduct,setAllProduct} = use(AuthContext) 

    useEffect(()=>{
        setAllProduct(productPromise) 
    },[allProduct,setAllProduct,productPromise]) ;


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