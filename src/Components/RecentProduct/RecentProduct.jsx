import React from 'react';
import RecentCard from './RecentCard';

const prodctPromise = fetch('http://localhost:3000/recentproduct').then(res => res.json()) ;

const RecentProduct = () => {
    return (
        <div className='bg-[#F5F5F5] pb-10'>
            <p className='text-center text-[#001931] text-5xl font-bold pt-10'>Recent <span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3]  to-[#9F62F2]'>Products</span></p> 
            <p className='text-center text-gray-600 mb-10 mt-5'>Check out the latest additions to our collection! From cars and bikes to electric vehicles, explore what’s new on the market and find your perfect match</p>
            <RecentCard prodctPromise={prodctPromise}></RecentCard>
        </div>
    );
};

export default RecentProduct;