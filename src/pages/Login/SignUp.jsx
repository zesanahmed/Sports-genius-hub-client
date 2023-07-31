import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile, googleSignInWithPopup, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {

        if (data.password !== data.confirmPassword) {
            return alert('Please make sure your passwords match');
        }
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        logOut();
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/login');
                    })
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.code,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            })
    };


    const handleSignInWithPopUp = () => {
        googleSignInWithPopup()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.code,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            })
    }

    return (
        <>
            <Helmet>
                <title>Sports | SignUp</title>
            </Helmet>
            <div className="min-h-screen md:flex items-center justify-center gap-10 bg-lime-100">
                <div>
                    <img className='h-96 w-96' src="https://img.freepik.com/free-vector/summer-sports-concept_1284-9394.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=sph" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-md shadow-md w-full max-w-md md:my-24">
                    <h2 className="text-2xl font-bold mb-4">SignUp to Sports Genius Hub</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            {...register("name", { required: true })}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your name"
                        />
                        {errors.name && <span>Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                        {errors.email && <span>Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                                })}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your password"
                            />
                            {errors.password?.type === 'required' && <span>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span>Password must be 6 characters</span>}
                            {errors.password?.type === 'pattern' && <span>Password must have one upper case and one special character</span>}

                            <button
                                type="button"
                                className="absolute top-2 right-3 text-gray-600"
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                {...register("confirmPassword", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                                })}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Confirm your password"
                            />
                            {errors.confirmPassword && <span>Confirm Password is required</span>}
                            {errors.confirmPassword?.type === 'minLength' && <span>Password must be 6 characters</span>}
                            {errors.confirmPassword?.type === 'pattern' && <span>Password must have one upper case and one special character</span>}
                            <button
                                type="button"
                                className="absolute top-2 right-3 text-gray-600"
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            {...register("photoURL", { required: true })}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="URL"
                        />
                        {errors.photoURL && <span>Photo URL is required</span>}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            SignUp
                        </button>
                    </div>

                    <div className="pt-4">
                        <p className="text-sm divider">Or</p>
                        <div className='text-center mb-6'>
                            <button onClick={handleSignInWithPopUp}
                                className="btn  btn-circle btn-outline hover:bg-lime-500"
                            >
                                <FcGoogle className="h-8 w-8"></FcGoogle>
                            </button>
                        </div>
                        <p>Already Have an Account? Please, <Link className='text-lg font-semibold text-lime-600' to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;




