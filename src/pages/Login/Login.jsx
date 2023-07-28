import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Login to Sports Genius Hub</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="absolute top-2 right-3 text-gray-600"
                            onClick={handlePasswordToggle}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </div>

                <div className="pt-4">
                    <p className="text-sm divider">Or</p>
                    <div className="flex mt-2">

                        <a href="#" className="mr-2 text-blue-600">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
