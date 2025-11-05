import React, { use } from 'react';
import { data, Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const CreateProduct = () => {

    const {myProduct,setMyProduct,user,allProduct,setAllProduct} = use(AuthContext) ;

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const category = e.target.category.value;
        const price_min = e.target.minPrice.value;
        const price_max = e.target.maxPrice.value || price_min;
        const condition = e.target.condition.value;
        const usage = e.target.usage.value;
        const image = e.target.image.value;
        const seller_name = e.target.sellerName.value;
        const email = e.target.sellerEmail.value;
        const seller_contact = e.target.sellerContact.value;
        const seller_image = e.target.sellerImage.value;
        const location = e.target.location.value;
        const description = e.target.description.value;

        const newProduct = {
            title,
            price_min: parseFloat(price_min),
            price_max: parseFloat(price_max),
            email,
            category,
            created_at: new Date().toISOString(),
            image,
            status: "pending",
            location,
            seller_image,
            seller_name,
            condition,
            usage,
            description,
            seller_contact,
        };

        // console.log("✅ New Product Created:", newProduct);
        
        fetch('http://localhost:3000/product',{
            method : "POST" ,
            headers : {
                'content-type' : 'application/json' 
            },
            body : JSON.stringify(newProduct) ,
        }).then(res => res.json()).then(data =>{
            setMyProduct([...myProduct,newProduct]) ; 
            setAllProduct([...allProduct,newProduct]) ;
            e.target.reset() ;
            console.log(data) ;
        })


    };

    return (
        <div className="lg:max-w-6/12 mx-auto my-10">
            {/* Back Link and Title */}
            <div className="text-center mb-6">
                <Link
                    to={'/allproduct'}
                    className="text-gray-600 hover:text-purple-600 text-sm font-medium block mb-2"
                >
                    ← Back To Products
                </Link>
                <h2 className="text-5xl font-bold text-gray-800 mt-3">
                    Create <span className="text-purple-600">A Product</span>
                </h2>
            </div>

            {/* Card */}
            <div className="bg-gray-100 shadow-md rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Title + Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                name="title"
                                type="text"
                                placeholder="e.g. Yamaha Fz Guitar for Sale"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                name="category"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            >
                                <option value="">Select a Category</option>
                                <option>Car</option>
                                <option>Bike</option>
                                <option>Electronics</option>
                                <option>Furniture</option>
                            </select>
                        </div>
                    </div>

                    {/* Min / Max Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Min Price You want to Sale ($)
                            </label>
                            <input
                                name="minPrice"
                                type="number"
                                placeholder="e.g. 18.5"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Max Price You want to Sale ($)
                            </label>
                            <input
                                name="maxPrice"
                                type="number"
                                placeholder="Optional (default = Min Price)"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                    </div>

                    {/* Product Condition + Usage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Product Condition
                            </label>
                            <div className="flex gap-5 mt-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="condition"
                                        value="brand new"
                                        defaultChecked
                                        required
                                    />
                                    Brand New
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="condition" value="used" required />
                                    Used
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Product Usage Time
                            </label>
                            <input
                                name="usage"
                                type="text"
                                placeholder="e.g. 1 year 3 months"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                    </div>

                    {/* Product Image URL */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Your Product Image URL
                        </label>
                        <input
                            name="image"
                            type="url"
                            placeholder="https://..."
                            className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                            required
                        />
                    </div>

                    {/* Seller Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Seller Name
                            </label>
                            <input
                                name="sellerName"
                                type="text"
                                value={user.displayName}
                                readOnly
                                placeholder="e.g. Artisan Roasters"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300 "
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Seller Email
                            </label>
                            <input
                                name="sellerEmail"
                                type="email"
                                value={user.email}
                                readOnly
                                placeholder="e.g. leli39155@srorld.com"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Seller Contact
                            </label>
                            <input
                                name="sellerContact"
                                type="text"
                                placeholder="e.g. +1-555-1234"
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Seller Image URL
                            </label>
                            <input
                                name="sellerImage"
                                type="url"
                                placeholder="https://..."
                                value={user.photoURL}
                                readOnly
                                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                                required
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            name="location"
                            type="text"
                            placeholder="City, Country"
                            className="input input-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Simple Description about your Product
                        </label>
                        <textarea
                            name="description"
                            placeholder="e.g. I bought this product 3 months ago..."
                            rows="3"
                            className="textarea textarea-bordered w-full bg-gray-50 focus:outline-none focus:border-gray-300"
                            required
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"
                    >
                        Create A Product
                    </button>
                </form>
            </div>
        </div>
    );

};

export default CreateProduct;