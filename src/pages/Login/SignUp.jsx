import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    };

    return (
        <div className="min-h-screen flex items-center justify-center gap-10 bg-lime-100">
            <div>
                <img className='h-96 w-96' src="https://img.freepik.com/free-vector/summer-sports-concept_1284-9394.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=sph" alt="" />
            </div>
            <form onSubmit={handleSignUp} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">SignUp to Sports Genius Hub</h2>
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
