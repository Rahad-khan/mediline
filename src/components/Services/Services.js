import React, { useEffect, useState } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('pricing.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id='services'>
            <h1 className='text-center text-3xl md:text-4xl font-bold text-green-500 mb-6'> <span className='border-b-4 border-green-600'>Services</span> </h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10'>
                {
                    services.map(service => <PricingCard 
                        key={service.id}
                        service= {service}
                        ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Services;