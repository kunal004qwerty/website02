import React from 'react';
import './Style/Section.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Section = () => {
    return (
        <div>
        <section className='section-1'>

            <div className='section-container'>

                {/* Displat Text  */}
                <div className='texts'>
                    <h1>Buy Starts with a piece of <span>Pizza</span></h1>
                    <h4>And  Ends with two piece of Pizza</h4>
                    <button>Discover</button>
                    <button>Menu</button>
                </div>

                {/* Black Box */}
                <div className='black-box'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor maxime aliquid amet culpa quod 
                consequatur nobis corporis exercitationem? Dolorum esse, perspiciatis doloribus eligendi sequi aliquid
                 maxime minima modi odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quos.</p>
                <button>
                    <span>more</span>
                    <ArrowForwardIcon className='arrow-forward'/>
                </button>

                </div>

            </div>

        </section>
            
        </div>
    );
};

export default Section;