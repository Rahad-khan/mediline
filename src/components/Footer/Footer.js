import React from 'react';
import {RiFacebookCircleFill} from 'react-icons/ri'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter, BsGithub} from 'react-icons/bs'

const Footer = () => {
    const currentYear= new Date().getFullYear();
    return (
        <footer class="bg-gray-800">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
            <ul class="text-gray-300">
                <li class="mb-4">
                    <a href="/" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Help center</h2>
            <ul class="text-gray-300">
                <li class="mb-4">
                    <a href="/" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
            <ul class="text-gray-300">
                <li class="mb-4">
                    <a href="/" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
            <ul class="text-gray-300">
                <li class="mb-4">
                    <a href="/" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-300 sm:text-center">&copy; {currentYear} MediLine. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0 items-center">
            <a href="/" class="text-gray-400 hover:text-white">
                <RiFacebookCircleFill  class="w-5 h-5"></RiFacebookCircleFill>
            </a>
            <a href="/" class="text-gray-400 hover:text-white">
                <GrInstagram class="w-5 h-5"></GrInstagram>
            </a>
            <a href="/" class="text-gray-400 hover:text-white">
                <BsTwitter class="w-5 h-5"></BsTwitter>
            </a>
            <a href="/" class="text-gray-400 hover:text-white">
                <BsGithub  class="w-5 h-5"></BsGithub>
            </a>
        </div>
    </div>
</footer>
    );
};

export default Footer;