import React from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import {Link} from 'react-router-dom';


const Portfolio = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <div className='lex flex-col lg:items-start'>
          <h1 className='h1'>Services</h1>
          <p className='mb-12 max-w-s,'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum <b>has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley </b> of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, 

          <br />
          <br />    
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
        </div>
        <div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]'>
            <img src={Image1} alt=''/>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
export default Portfolio;
