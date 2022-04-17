import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Sliders from '../Sliders/Sliders';

const Home = () => {
    return (
        <>
            <main>
            <Sliders></Sliders>
            <Services></Services>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Home;