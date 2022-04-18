import React, { useState } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { GrFacebookOption, GrGoogle } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, faceBookLoading, fbError] =
    useSignInWithFacebook(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(fbUser);
  // error Element
  let errorElement;
  let processing;
//   If give error
  if (error || fbError) {
    errorElement = (
      <p className="text-red-700 mb-4">{error?.message || fbError?.message}</p>
    );
  }
//   If loading
  if (loading || faceBookLoading) {
      errorElement = '';
    processing = <Loading></Loading>;
  }
  if (user || fbUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="my-6 ">
      <div className="flex items-center">
        <div style={{ height: "2px" }} className="w-full bg-green-600"></div>
        <p className="text-xl mx-4">Or</p>
        <div style={{ height: "2px" }} className="w-full bg-green-600"></div>
      </div>
      {processing}
      {errorElement}
      <div className="flex flex-col items-center justify-center mt-4">
        <button
          onClick={() => signInWithGoogle()}
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-7 py-2.5 text-center flex items-center mb-2"
        >
          <GrGoogle className="text-xl mr-1" />
          Sign in with Google
        </button>
        <button
          onClick={() => signInWithFacebook()}
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center mb-2"
        >
          <GrFacebookOption className="text-xl mr-1"></GrFacebookOption>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignIn;
