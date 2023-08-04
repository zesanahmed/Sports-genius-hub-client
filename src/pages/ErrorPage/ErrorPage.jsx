import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex gap-6 items-center justify-center h-screen bg-gray-100">
            <img src="https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=sph" alt="Error" className=" mb-8" />
            <div>
                <p className="text-center my-10 text-9xl font-bold">404</p>
                <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
                <Link
                    to="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold flex items-center gap-2"
                >
                    <FaHome></FaHome>Go Back To Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
