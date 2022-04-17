import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from "../../firebase.init";

const Register = () => {
    const [checked, setChecked] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password !== repeatPassword) {
            return setError("Password Didn't Match Try Again")
        }
        createUserWithEmailAndPassword(email, password);
        setError('')
    }
  return (
    <div className="my-10 md:w-5/6 mx-auto">
      <form className="md:w-1/2 mx-auto w-5/6 " onSubmit={handleSignUp}>
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

        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Repeat password
          </label>
          <input
          onBlur={(e) => setRepeatPassword(e.target.value)}
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-green-300 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
            onClick={() => setChecked(!checked)}
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-green-300"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the
              <span className={`ml-1 ${checked? "text-green-600 hover:underline" : "text-red-600"} `}>
                terms and conditions
              </span>
            </label>
          </div>
        </div>
        <div className="text-start mb-6">
          <label
            className="font-medium text-gray-900 dark:text-gray-300"
          >
            Already have an account?
            <Link className="text-green-600 hover:underline ml-1" to="/login">
              Login
            </Link>
          </label>
        </div>
        <p className="text-red-700 mb-4">{error}</p>
        <button
        disabled={!checked}
          type="submit"
          className = {`text-white  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-1/2 block px-6 py-2.5 text-center ${checked ? " bg-green-700 hover:bg-green-800 " : 'bg-green-400'}`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
