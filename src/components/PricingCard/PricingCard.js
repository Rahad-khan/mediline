import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const PricingCard = ({service}) => {
    const {title,price,benifits} = service;
    return (
        <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 ">
        <h5 className="mb-4 text-xl font-medium text-gray-500">{title}</h5>
        <div className="flex items-baseline text-gray-900">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
            <span className="ml-1 text-xl font-normal text-green-500 dark:text-gray-400">/month</span>
        </div>
        {/* <!-- List --> */}
        <ul className="my-7 space-y-5">
        {
                benifits.map(b => 
                <li className="flex space-x-3 items-center">
                {/* <!-- Icon --> */}
                <BsCheckCircleFill className="w-4 h-4 text-green-600"></BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500">{b}</span>
            </li>)
            }
        </ul>
        <Link to='/checkout'>
        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center">Check Out</button>
        </Link>
        
    </div>
    );
};

export default PricingCard;