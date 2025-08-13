import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

export default function SignUp() {
  const { register: registerUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state?.from?.pathname as string) || "/";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as any;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      Swal.fire({ icon: "error", title: "Passwords do not match" });
      return;
    }

    try {
      await registerUser(email, password);
      Swal.fire({ icon: "success", title: "Account created" });
      navigate(from, { replace: true });
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Signup failed",
        text: err?.response?.data?.error || err.message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sports | Sign Up</title>
      </Helmet>
      <div className="min-h-screen md:flex items-center justify-center gap-10 bg-lime-100">
        <div>
          <img
            className="h-96 w-96"
            src="https://img.freepik.com/free-vector/summer-sports-concept_1284-9394.jpg"
            alt=""
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white p-6 rounded-md shadow-md w-full max-w-md md:my-24"
        >
          <h2 className="text-2xl font-bold mb-4">
            Sign Up to Sports Genius Hub
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                minLength={6}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute top-2 right-3 text-gray-600"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                required
                minLength={6}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute top-2 right-3 text-gray-600"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>

          <div className="pt-4">
            <p className="mt-4">
              Already have an account?{" "}
              <Link className="text-lg font-semibold text-lime-600" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
