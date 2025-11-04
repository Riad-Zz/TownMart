import React, { useRef } from 'react';
import { FaMapLocation } from 'react-icons/fa6';
import { FiPhoneIncoming } from 'react-icons/fi';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { useLoaderData, useNavigate, useNavigation } from 'react-router';
import { toast } from 'react-toastify';


const StatusBadge = ({ status }) => {
    let classes = "";
    switch (status.toLowerCase()) {
        case 'on sale':
            classes = "bg-yellow-100 text-yellow-800";
            break;
        case 'pending':
            classes = "bg-blue-100 text-blue-800";
            break;
        case 'sold':
            classes = "bg-red-100 text-red-800";
            break;
        default:
            classes = "bg-gray-100 text-gray-800";
    }
    return (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-md ${classes}`}>
            {status}
        </span>
    );
};

const CardDetails = () => {
    const data = useLoaderData();
    // console.log(data) ;
    const navigate = useNavigate();
    const {
        _id,
        title,
        price_min,
        price_max,
        email,
        category,
        created_at,
        image,
        status,
        location,
        seller_image,
        seller_name,
        condition,
        usage,
        description,
        seller_contact
    } = data;

    const postedDate = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const ref = useRef(null);

    const handleModal = () => {
        ref.current.showModal();
    }

    const handleBid = (e) => {
        e.preventDefault();
        // console.log("Bidded") ;
        const name = e.target.buyerName.value;
        const email = e.target.buyerEmail.value;
        const image = e.target.buyerImage.value;
        const price = e.target.offeredPrice.value;
        const contact = e.target.contactInfo.value;

        const newBids = {
            product: _id,
            buyer_image: image,
            buyer_name: name ,
            buyer_contact: contact,
            buyer_email: email,
            bid_price: price,
            status: "pending",
        }

        // console.log(name,email,image,price,contact) ;
        fetch('http://localhost:3000/bids', {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(newBids) ,
        }).then(res => res.json())
            .then(data => console.log("After : ", data))

        e.target.reset() ;
        ref.current.close() ;
        toast.success("Bid Submitted Succesfully !") ;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="max-w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* --- Left Column (Image & Description) --- */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Image Area */}
                    <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                            src={image}
                            alt={title}
                            className="w-full" // Ensure image covers the area
                            onError={(e) => { e.target.src = 'https://placehold.co/800x600/e2e8f0/94a3b8?text='; }}
                        />
                    </div>

                    {/* Product Description Box */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Product Description</h2>
                        <div className="flex items-center gap-4 text-sm mb-4 pb-4 border-b border-gray-200">
                            <p className="text-gray-600 px-3 py-1 bg-purple-100 rounded-md font-medium">
                                Condition: <span className="font-semibold text-purple-800 capitalize">{condition}</span>
                            </p>
                            <p className="text-gray-600 px-3 py-1 bg-purple-100 rounded-md font-medium">
                                Usage Time: <span className="font-semibold text-purple-800">{usage}</span>
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {description}
                        </p>
                    </div>
                </div>

                {/* --- Right Column (Product Info, Seller, Button) --- */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    {/* Back to Products Link */}
                    <a onClick={() => navigate(-1)} href="#" className="inline-flex items-center text-sm text-gray-600 hover:text-purple-700 transition-colors">
                        <TbArrowNarrowLeft />
                        Back To Products
                    </a>

                    {/* Product Title */}
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h1>

                    {/* Category */}
                    <span className="inline-block text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded capitalize w-fit">
                        {category}
                    </span>

                    {/* Price Box */}
                    <div className="bg-gray-50 rounded-lg p-5 mt-2">
                        <p className="text-3xl font-bold text-green-600 leading-none">
                            ${price_min} - ${price_max}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Price starts from</p>
                    </div>

                    {/* Product Details Box */}
                    <div className="bg-gray-50 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                        <dl className="text-sm text-gray-600 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Product ID:</dt>
                                <dd className="font-medium text-gray-700">{_id}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Posted:</dt>
                                <dd className="font-medium text-gray-700">{postedDate}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Seller Information Box */}
                    <div className="bg-gray-50 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Seller Information</h3>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0">
                                {/* Original img tag if you want to use it later: */}
                                <img
                                    src={seller_image}
                                    alt={seller_name}
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/100x100/e2e8f0/94a3b8?text='; }}
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">{seller_name}</p>
                                <p className="text-sm text-gray-500">{email}</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="flex items-center gap-2 text-gray-600">
                                <FaMapLocation /> {location}
                            </p>
                            <p className="flex items-center gap-2 text-gray-600">

                                Contact: <span className="text-gray-700">{seller_contact}</span>
                            </p>
                            <div className="flex items-center gap-2">
                                <dt className="text-gray-600">Status:</dt>
                                <dd><StatusBadge status={status} /></dd>
                            </div>
                        </div>
                    </div>

                    {/* Buy Button */}
                    <button onClick={handleModal} className="w-full cursor-pointer bg-purple-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        I Want Buy This Product
                    </button>

                    {/* ------------------------Modal---------------------------- */}

                    <dialog ref={ref} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white text-gray-800 rounded-xl">
                            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">
                                Give Seller Your Offered Price
                            </h3>

                            <form onSubmit={handleBid} className="space-y-5">
                                {/* Name and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-[#374151]">Buyer Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            required
                                            className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                            name="buyerName"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-[#374151]">Buyer Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            required
                                            className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                            name="buyerEmail"
                                        />
                                    </div>
                                </div>

                                {/* Image URL */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-[#374151]">Buyer Image URL</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="https://...your_img_url"
                                        className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                        name="buyerImage"
                                    />
                                </div>

                                {/* Offered Price */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-[#374151]">Place your Price</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 1500"
                                        required
                                        className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                        name="offeredPrice"
                                    />
                                </div>

                                {/* Contact Info */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-[#374151]">Contact Info</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. +1-555-1234"
                                        required
                                        className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                        name="contactInfo"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-5">
                                    <button type='button' onClick={()=>ref.current.close()} className="btn btn-outline btn-primary">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"
                                    >
                                        Submit Bid
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>




                </div>
            </div>
        </div>
    );
};

export default CardDetails;