import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {FaArrowAltCircleRight, FaArrowCircleRight} from 'react-icons/fa'

const PricingCard = ({service}) => {
    const navigate = useNavigate();
    const {title,price,benifits,image,id} = service;
    return (
        <div className=" max-w-sm bg-white rounded-lg border shadow-md justify-self-center">
            <img className="h-52" src={image} alt="" />
            <div className='p-5'>
            <h5 className="mb-4 text-xl font-medium text-gray-500">{title}</h5>
        <div className="flex items-baseline text-gray-900">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
            <span className="ml-1 text-xl font-normal text-green-500 dark:text-gray-400">/month</span>
        </div>
        {/* <!-- List --> */}
        <ul className="my-7 space-y-5">
        {
                benifits.map((benifit, index) => 
                <li key={index} className="flex space-x-3 items-center">
                {/* <!-- Icon --> */}
                <BsCheckCircleFill className="w-4 h-4 text-green-600"></BsCheckCircleFill>
                <span className="text-base font-normal leading-tight text-gray-500">{benifit}</span>
            </li>)
            }
        </ul>
        <button
        onClick={() => navigate(`/checkout/${id}`)}
         type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center items-center">Be a Member <FaArrowCircleRight className="text-xl ml-1"></FaArrowCircleRight> </button>
            </div>
        
        
    </div>
    );
};

export default PricingCard;