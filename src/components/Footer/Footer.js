import React from 'react';
import {RiFacebookCircleFill} from 'react-icons/ri'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter, BsGithub} from 'react-icons/bs'

const Footer = () => {
    const currentYear= new Date().getFullYear();
    return (
        <footer className="bg-gray-800">
    <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a href="/" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Help center</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a href="/" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a href="/" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a href="/" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="/" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center">&copy; {currentYear} MediLine. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0 items-center">
            <a href="/" className="text-gray-400 hover:text-white">
                <RiFacebookCircleFill  className="w-5 h-5"></RiFacebookCircleFill>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
                <GrInstagram className="w-5 h-5"></GrInstagram>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
                <BsTwitter className="w-5 h-5"></BsTwitter>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
                <BsGithub  className="w-5 h-5"></BsGithub>
            </a>
        </div>
    </div>
</footer>
    );
};

export default Footer;