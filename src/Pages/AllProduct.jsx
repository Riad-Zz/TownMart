import React from 'react';
import AllProductLayout from '../Components/AllProductCards/AllProductLayout';
import { useLoaderData } from 'react-router';



// const productPromise = fetch('https://town-mart-server.vercel.app/product').then(res => res.json())

const AllProduct = () => {
    const productPromise = useLoaderData() ;
    return (
        <div>
            <div className='bg-[#F5F5F5] pb-10'>
                <p className='text-center text-[#001931] text-5xl font-bold pt-10'>All <span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3]  to-[#9F62F2]'>Products</span></p>
                <p className='text-center text-gray-600 mb-10 mt-5'>Check out the  all the latest additions to our collection! From cars and bikes to electric vehicles, explore what’s new on the market and find your perfect match</p>
                <AllProductLayout productPromise={productPromise}></AllProductLayout>
            </div>
        </div>
    );
};

export default AllProduct;