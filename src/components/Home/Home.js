import React from 'react';
import Services from '../Services/Services';
import Sliders from '../Sliders/Sliders';
import WhyUSe from '../WhyUse/WhyUSe';

const Home = () => {
    return (
        <>
            <main>
            <Sliders></Sliders>
            <section className='my-10 md:w-5/6 mx-auto'>
            <Services></Services>
            <WhyUSe></WhyUSe>
            </section>
            </main>
        </>
    );
};

export default Home;