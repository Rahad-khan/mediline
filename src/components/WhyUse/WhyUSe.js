import React from "react";
import {FaHeartbeat, FaRegSmileBeam, FaRegCalendarCheck} from 'react-icons/fa';
import {BsShieldPlus} from 'react-icons/bs';
import {GiStethoscope} from 'react-icons/gi';
import {MdPayment} from 'react-icons/md';

const WhyUSe = () => {
  return (
    <div className="my-16">
      <h1 className="font-semibold text-3xl md:text-5xl text-center mb-10">
        Why You Should Use
        <br /> Mediline Services
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <FaHeartbeat className="text-5xl md:text-7xl text-emerald-300 w-3/5 relative top-3 md:top-0"></FaHeartbeat>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Work from the Heart
            </h5>
            <p class="mb-3 font-normal text-gray-700">
            We care about your health with all our heart and sincerity so you can live happily.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <FaRegSmileBeam className="text-5xl md:text-7xl text-emerald-300 w-3/5 relative top-3 md:top-0 md:bottom-6"></FaRegSmileBeam>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Serve With Smile
            </h5>
            <p class="mb-3 font-normal text-gray-700">
            We care about your health with all our heart and sincerity so you can live happily.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <BsShieldPlus className="text-5xl md:text-7xl text-emerald-300 w-3/5 relative top-3 md:top-0 md:bottom-6"></BsShieldPlus>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Always Ready
            </h5>
            <p class="mb-3 font-normal text-gray-700">
            We care about your health with all our heart and sincerity so you can live happily.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <GiStethoscope className="text-5xl md:text-7xl text-emerald-300 w-3/5 relative top-3 md:top-0 md:bottom-6"></GiStethoscope>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Accurate Diagnostics
            </h5>
            <p class="mb-3 font-normal text-gray-700">
            We care about your health with all our heart and sincerity so you can live happily.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <FaRegCalendarCheck className="text-5xl md:text-7xl text-emerald-300 w-3/5 relative top-3 md:top-0 md:bottom-6"></FaRegCalendarCheck>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Yearly Checkup
            </h5>
            <p class="mb-3 font-normal text-gray-700">
            We care about your health with all our heart and sincerity so you can live happily.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <MdPayment className="text-5xl md:text-7xl text-emerald-300 w-3/5 relative top-3 md:top-0 md:bottom-6"></MdPayment>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Pay in Instalments
            </h5>
            <p class="mb-3 font-normal text-gray-700">
            We care about your health with all our heart and sincerity so you can live happily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUSe;
