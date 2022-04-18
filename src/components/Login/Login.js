import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SignIn from "../SignIn/SignIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  let navigate = useNavigate();

  let location = useLocation();

  let from = location.state?.from?.pathname || "/";


  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Snet Reset Email Succesfully !!!')
    } 
    else {
      toast("Please Give Email First")
    }
    console.log(email);
  };


  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="my-10 md:w-5/6 mx-auto">
      <h1 className="text-center text-4xl text-green-500 font-semibold mb-6">
        Please Login
      </h1>
      <div className="md:w-1/2 mx-auto w-5/6">
        <form onSubmit={handleLogIn}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-green-300 block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-2">
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
          {(loading ||sending) && <Loading></Loading>}
          <p className="text-red-700 mb-4">{signInError?.message || error?.message}</p>
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-1/2 block px-6 py-2.5 text-center"
          >
            Login
          </button>
        </form>
        <div className="text-sm my-4">
          <label
            htmlFor="terms"
            className="font-medium text-gray-900 dark:text-gray-300"
          >
            New to MediLine ?
            <Link
              className="text-green-600 hover:underline ml-1"
              to="/register"
            >
              Create New Account
            </Link>
          </label>
        </div>
        <div className="text-md font-medium mb-2">
          <span>Forgot Password ? </span>
          <button
            onClick={handleResetPassword}
            className="text-green-600 hover:underline ml-1"
            to="/register"
          >
            Reset Password ?
          </button>
        </div>
        <SignIn></SignIn>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
