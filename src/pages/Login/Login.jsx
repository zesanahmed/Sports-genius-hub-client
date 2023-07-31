import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignInWithPopup } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire('Login Successful')
                navigate(from, { replace: true });
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
                <title>Sports | Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center gap-10 bg-lime-100">
                <div>
                    <img className='h-96 w-96' src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=sph" alt="" />
                </div>
                <form onSubmit={handleLogin} className="bg-white p-6 rounded-md shadow-md w-full max-w-md md:my-24">
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
                        <div className='text-center mb-6'>
                            <button onClick={handleSignInWithPopUp}
                                className="btn  btn-circle btn-outline hover:bg-lime-500"
                            >
                                <FcGoogle className="h-8 w-8"></FcGoogle>
                            </button>
                        </div>
                        <p>Do Not Have An Account? Please, <Link className='text-lg font-semibold text-lime-600' to='/signUp'>SignUp</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
