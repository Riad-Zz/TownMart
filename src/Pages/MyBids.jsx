import React, { use, useEffect } from 'react';
import { data, useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyBids = () => {
    const { mybids, setmyBids,user } = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/bids?email=${user.email}`,{
            headers : {
                authorization : `Bearer ${user.accessToken}`
            },
        })
        .then((res)=> res.json())
        .then(data => {
            setmyBids(data);
        })
    }, [setmyBids,user.email,mybids,user.accessToken]);

    //---------------Remove Bids-----------------------------------

    const handleRemoveBid = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id)
                fetch(`http://localhost:3000/bids/${_id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingBids = mybids.filter(bid => bid._id != _id) ;
                            setmyBids(remainingBids) ;
                        }
                    })
            }
        });
    }

    // console.log(mybids);
    return (
        <div className='min-h-screen max-w-10/12 mx-auto'>
            <p className='text-center text-[#001931] text-5xl font-bold pt-10'>My Bids : <span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3]  to-[#9F62F2]'>{mybids.length}</span></p>

            <div className="overflow-x-auto mt-10 bg-gray-100 rounded-lg p-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>SL NO</th>
                            <th>Buyer</th>
                            <th>Bid Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            mybids.map((bid, index) => <tr key={bid._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={bid.buyer_image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bid.buyer_name}</div>
                                            <div className="text-sm opacity-50">{bid.buyer_email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {bid.bid_price}


                                </td>
                                <td><div className="badge badge-warning">{bid.status}</div></td>
                                <th>
                                    <button onClick={() => handleRemoveBid(bid._id)} className="btn bg-none btn-outline text-red-500 btn-xs">Remove Bid</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBids;