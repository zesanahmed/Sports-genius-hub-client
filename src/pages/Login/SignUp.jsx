import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {

    };


    return (
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
                    <div className="flex mt-2">

                        <a href="#" className="mr-2 text-blue-600">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <p>Already Have an Account? Please, <Link className='text-lg font-semibold text-lime-600' to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;




// const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const confirmPassword = form.confirmPassword.value;
    //     const photoURL = form.photoURL.value;
    //     if (password !== confirmPassword) {
    //         alert("Please make sure , Your password match");
    //         return;
    //     }
    //     console.log(name, email, password, confirmPassword, photoURL);
    //     signIn(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })

    // };