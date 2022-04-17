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
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img className='w-full max-h-screen object-cover' src={slide2} alt='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img className='w-full max-h-screen object-cover' src={slide3} alt='' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img className='w-full max-h-screen object-cover' src={slide4} alt='' />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
    );
};

export default Sliders;