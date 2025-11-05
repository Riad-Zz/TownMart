import React from 'react';
import { Link } from 'react-router';

const AllProductCard = ({ data }) => {
    const {
        title,
        price_min,
        price_max,
        image,
        condition
    } = data;

    return (
        // Card container
        <>
            <div className="cursor-pointer overflow-hidden rounded-xl relative border border-gray-200 bg-[#F0F2F5] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md p-4 lg:p-10 shadow-gray-300/30 hover:shadow-gray-400/40 ">

                {/* Product Image */}
                <img
                    className="md:h-70 w-full "
                    src={image}
                    alt={title}
                />

                {/* Card Content */}
                <div className="p-5">

                    {/* Title and Condition */}
                    <div className="badge bg-[#EEE5FC] text-[#8751EB] my-3 py-3">On Sale</div>
                    <h3 className="truncate text-lg font-semibold text-[#001931]">
                        {title} [
                        <span className="capitalize font-medium text-gray-700">{condition}</span>
                        ]
                    </h3>

                    {/* Price */}
                    <p className="my-3 text-xl font-bold text-[#632EE3]">
                        ${price_min} - {price_max}
                    </p>

                    {/* View Details Button */}
                    <Link to={`/details/${data._id}`}>
                        <button className="w-full rounded-lg border-2 border-[#632EE3] bg-white py-2 px-4 font-semibold text-[#632EE3] transition-colors duration-200 hover:border-purple-600 hover:bg-[#9F62F2] hover:text-white focus:outline-none  cursor-pointer">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </>

    );
};

export default AllProductCard;