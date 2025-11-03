import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logoo.png'


const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className="hover:text-transparent text-black  bg-clip-text bg-linear-to-r from-[#632EE3] via-[#9F62F2] to-[#9F62F2]"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/allproduct"
                    className="hover:text-transparent text-black  bg-clip-text bg-linear-to-r from-[#632EE3] via-[#9F62F2] to-[#9F62F2]"
                >
                    All Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myproduct"
                    className="hover:text-transparent text-black  bg-clip-text bg-linear-to-r from-[#632EE3] via-[#9F62F2] to-[#9F62F2]"
                >
                    My Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/bids"
                    className="hover:text-transparent text-black  bg-clip-text bg-linear-to-r from-[#632EE3] via-[#9F62F2] to-[#9F62F2]"
                >
                    My Bids
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/create"
                    className="hover:text-transparent text-black  bg-clip-text bg-linear-to-r from-[#632EE3] via-[#9F62F2] to-[#9F62F2]"
                >
                    Create Product
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full">
            <div className="lg:max-w-11/12 mx-auto px-1 flex justify-between items-center h-18">
                <div className="flex items-center relative">
                    {/*------------- Three bar for small screens----------------------- */}
                    <div className="lg:hidden">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-square">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                            >
                                {links}
                            </ul>
                        </div>
                    </div>

                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-20 h-20 relative  z-10"
                        />
                    </Link>
                    <Link  to="/">
                        <div className='hidden lg:flex text-3xl font-bold'>Town<span className="hidden lg:block text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] via-[#9F62F2] to-[#9F62F2]">
                            Mart
                        </span></div>
                        
                    </Link>
                </div>

                {/*---------------------- Mid Links--------------------------------- */}
                <ul className="hidden lg:flex gap-10 text-gray-700 text-[16px]  midnav">
                    {links}
                </ul>

                {/*---------------------- Right Side Buttons ----------------------- */}
                <div className="flex items-center gap-3 md:gap-5">
                    <Link to="/login">
                        <button className="outline outline-[#632EE3]  text-black font-bold px-4 md:px-6 py-2 rounded hover:opacity-90 cursor-pointer">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="bg-linear-to-r from-[#632EE3]  to-[#9F62F2] text-white font-bold px-4 md:px-6 py-2 rounded cursor-pointer hover:opacity-90">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
