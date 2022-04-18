import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slide1 from '../../images/sliders/doc-1.jpg'
import slide2 from '../../images/sliders/doc-2.jpg'
import slide3 from '../../images/sliders/doc-3.jpg'
import slide4 from '../../images/sliders/doc-4.jpg'


const Sliders = () => {
    

    return (
        <Carousel showThumbs= {false} autoPlay={true} infiniteLoop={true} showStatus={false}>
                <div>
                    <img className='w-full max-h-screen object-cover' src={slide1} alt='' />
                    <p className="legend">Compassion and collaboration</p>
                </div>
                <div>
                <img className='w-full max-h-screen object-cover' src={slide2} alt='' />
                    <p className="legend">Assurances to make healthy life</p>
                </div>
                <div>
                <img className='w-full max-h-screen object-cover' src={slide3} alt='' />
                    <p className="legend">Collaboration for the cure of disease</p>
                </div>
                <div>
                <img className='w-full max-h-screen object-cover' src={slide4} alt='' />
                    <p className="legend">Control the diseases and gives us Cheerful life</p>
                </div>
            </Carousel>
    );
};

export default Sliders;