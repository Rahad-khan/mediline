import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <header  className='md:w-5/6 p-4 md:p-0 mx-auto'>
      <nav className="bg-white border-gray-200 sm:py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
            <p className="text-4xl font-semibold">Medi 
              <span className="whitespace-nowrap text-green-400">
                Line
              </span>
            </p>
          </Link>
          <button onClick={() => setOpen(!open)}
          className="block md:hidden"
          >
            {
              open ? <ImCross className="text-green-400"/> : <CgMenu className="text-2xl font-extraboldbold text-green-400"/>
            }
          </button>
          <div className={`w-full md:block md:w-auto ${open ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
              <li className="mb-2">
                <CustomLink
                  to="/"
                >
                  Home
                </CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink
                  to="/blog">
                  Blog
                </CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink
                  to="/aboutme">
                  About Me
                </CustomLink>
              </li>
              <li className="mb-2">
                {
                  user ? <button className="font-medium" onClick={() => signOut(auth)}>Sign Out</button> : <CustomLink
                  to="/login">
                  Login
                </CustomLink>
                }
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
