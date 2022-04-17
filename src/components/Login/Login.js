import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Register from "../Register/Register";

const Login = () => {
    let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  return (
    <div className="my-10 md:w-5/6 mx-auto">
      <form className="md:w-1/2 mx-auto w-5/6 ">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-green-300 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-green-300 block w-full p-2.5"
            required
          />
        </div>

        <div className="text-sm mb-6">
          <label
            htmlFor="terms"
            className="font-medium text-gray-900 dark:text-gray-300"
          >
            New to MediLine ?
            <Link className="text-green-600 hover:underline ml-1" to='/register'>
              Create New Account
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-1/2 block px-6 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
