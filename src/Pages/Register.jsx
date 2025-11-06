import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
    const [eye, setEye] = useState(false);
    const { gooogleLogin, setUser, emailRegister, updateUser } = use(AuthContext);
    const location = useLocation();
    const naviagate = useNavigate();

    //----------------Handle Eye Control----------------------
    const handleEyeControl = (e) => {
        e.preventDefault();
        setEye(!eye);
    }

    //-------------Gogle Login----------------------------
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        gooogleLogin().then((result) => {
            const user = result.user;
            setUser(user);
            naviagate(location.state || '/'); 
            const newUser = {
                name : result.user.displayName ,
                email : result.user.email,
                photo : result.user.photoURL,
            }

            //-------------------Add to DB--------------------
            fetch('https://town-mart-server.vercel.app/user',{
                method : "POST" ,
                headers : {
                    'content-type' : 'application/json',
                },
                body : JSON.stringify(newUser) ,
            }).then(res => res.json())
            .then(data => console.log("after : ",data))

        }).catch((error) => {
            const errorMessage = error.message;
            toast.warn(errorMessage);
        })
    }

    //---------------------Email Login -----------------------------
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        //--------------Password Validation-----------------------
        if (!/[A-Z]/.test(password)) {
            toast.warning("Password must contain at least one uppercase letter (A-Z).");
            return;
        }

        if (!/[a-z]/.test(password)) {
            toast.warning("Password must contain at least one lowercase letter (a-z).");
            return;
        }

        if (password.length < 6) {
            toast.warning("Password must be at least 6 characters long.");
            return;
        }

        //----------------Email Reguister-------------------------
        emailRegister(email, password).then((result) => {
            const user = result.user;
            naviagate(location.state || '/');

        //--------------------------Update User Info(Live)----------------------------------
            updateUser({ displayName: name, photoURL: photo }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });

                const newUser = {
                    name: name,
                    email: email,
                    photo: photo,
                    password : password,
                }

            //---------------------Add User to DB--------------------------------------
                fetch('https://town-mart-server.vercel.app/user', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body : JSON.stringify(newUser) ,
                }).
                    then(res => res.json()).
                    then(data => console.log("new data : ", data))

            }).catch((error) => {
                toast.warning(error.message);
                setUser(user)
            })
            
        }).catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        })

    }

    return (
        <div className='flex justify-center items-center min-h-screen mt-5 md:mt-0 p-2 bg-gray-100'>
            <form onSubmit={handleRegister} className='bg-white lg:py-24 rounded-xl shadow-md border border-gray-200 w-full max-w-md lg:max-w-2xl p-8 md:p-12'>

                <p className='text-black playfair-display-font text-3xl md:text-4xl text-center font-semibold mb-8'>
                    Create a New Account
                </p>

                <label className="label font-bold text-[#403F3F] text-[16px] mb-2">Name</label>
                <input
                    type="text"
                    className="input mb-3 w-full bg-[#F3F3F3] py-4 px-4 rounded-lg outline-none"
                    placeholder="Enter Your Name"
                    name='name'
                    required
                />

                <label className="label font-bold text-[#403F3F] text-[16px] mb-2">Photo URL</label>
                <input
                    type="text"
                    className="input mb-3 w-full bg-[#F3F3F3] py-4 px-4 rounded-lg outline-none"
                    placeholder="Photo link"
                    name='photo'
                    required
                />

                <label className="label font-bold text-[#403F3F] text-[16px] mb-2">Email</label>
                <input
                    type="email"
                    className="input mb-3 w-full bg-[#F3F3F3] py-4 px-4 rounded-lg outline-none"
                    placeholder="Email"
                    name='email'
                    required
                />

                <label className="label font-bold text-[#403F3F] text-[16px] mb-2 mt-4">Password</label>
                <div className='relative'>
                    <input
                        type={`${eye ? "text" : "password"}`}
                        className="input mb-3 w-full bg-[#F3F3F3] pr-10 py-4 px-4 rounded-lg outline-none"
                        placeholder="Password"
                        name='password'
                        required
                    />
                    {
                        eye ? <FaEyeSlash onClick={handleEyeControl} className='z-10 absolute right-4 bottom-5 text-xl text-[#9F62F2]'></FaEyeSlash>
                            : <FaEye onClick={handleEyeControl} className='z-10 absolute right-4 bottom-5 text-xl  text-[#9F62F2]'></FaEye>
                    }
                </div>

                <button className="btn mt-7 mb-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] transition font-bold border-none text-white w-full py-3 rounded-lg">
                    Register
                </button>

                <p className='text-center font-semibold text-gray-500 mb-4'>OR</p>

                <button onClick={handleGoogleLogin} className="btn font-bold bg-gray-100 text-black border border-[#e5e5e5] w-full flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-gray-200 transition">
                    <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </svg>
                    Continue with Google
                </button>

                <p className='text-[#706F6F] text-center mt-6'>
                    Already have an account?{' '}
                    <a href='/login' className='font-bold text-[#9F62F2] hover:text-[#632EE3]'>
                        Login
                    </a>
                </p>
            </form>

        </div>
    );
};

export default Register;