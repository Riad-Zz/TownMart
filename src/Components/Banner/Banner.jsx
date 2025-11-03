import React from 'react';
import leftbg from '../../assets/bg-hero-left.png'
import rightbg from '../../assets/bg-hero-right.png'
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='flex justify-between items-center px-2 bg-linear-to-r from-[#FFE6FD]  to-[#E0F8F5] p-5'>
            <div className=' hidden md:block'>
                <img src={leftbg} alt="" />
            </div>
            <div>
                <h1 className='text-center text-[#001931] font-bold text-6xl md:text-7xl md:tracking-wide'>Deal Your <span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3]  to-[#9F62F2]'>Product</span> <br /> In a <span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Smart</span> Way !</h1>
                <p className='text-center text-[#627382] mt-3'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>
                <div className='flex justify-center items-center mt-7'>
                    <div>
                        <input type="text" className='text-[#627382] outline-0 bg-white  px-4 py-3  md:w-md rounded-l-3xl shadow-md' placeholder='Search For Products, Categoriees...' />
                    </div>
                    <div>
                        <button className='bg-[#632EE3] py-3  px-4 rounded-r-3xl'><CiSearch className='text-2xl text-white' /></button>
                    </div>

                </div>
                <div className='flex justify-center items-center mt-7 gap-4 flex-wrap'>
                    <button className="bg-linear-to-r from-[#632EE3]  to-[#9F62F2] text-white font-bold px-4 md:px-6 py-3 rounded cursor-pointer hover:opacity-90">
                        Watch All Product
                    </button>
                    <button className="outline outline-[#632EE3]  text-black font-bold px-4 md:px-6 py-3 rounded hover:opacity-90 cursor-pointer">
                        Post an Product
                    </button>

                </div>
            </div>
            <div className='hidden md:block'>
                <img src={rightbg} alt="" />
            </div>
        </div>
    );
};

export default Banner;