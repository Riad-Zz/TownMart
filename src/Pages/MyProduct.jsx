import React, { use, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router';

const MyProduct = () => {
    const products = useLoaderData() ;
    const {myProduct,setMyProduct} = use(AuthContext) ;

    useEffect(()=>{
        setMyProduct(products)
    },[])

    return (
        <div className='min-h-screen max-w-10/12 mx-auto'>
            <p className='text-center text-[#001931] text-5xl font-bold pt-10'>My Product : <span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3]  to-[#9F62F2]'>{myProduct.length}</span></p>

            <div className="overflow-x-auto mt-10 bg-gray-100 rounded-lg p-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>SL NO</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myProduct.map((bid, index) => <tr key={bid._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="h-10 w-16">
                                                <img
                                                    src={bid.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    {bid.title}
                                </td>
                                <td>{bid.category}</td>
                                <td>{bid.price_max}</td>

                                <td><div className="badge badge-warning">{bid.status}</div></td>

                                <th className='flex gap-2'>
                                    <button  className="btn bg-none btn-outline text-purple-500 btn-xs">Edit</button>
                                    <button  className="btn bg-none btn-outline text-red-500 btn-xs">Delete</button>
                                    <button  className="btn bg-none btn-outline text-green-500 btn-xs">Make Sold</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProduct;