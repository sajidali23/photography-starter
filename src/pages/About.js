import React from 'react';
import WomanImg from '../img/about/woman.png';
import {Link} from 'react-router-dom';

const About = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow:hidden'>
          <img src={WomanImg}/>
          </div>
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About Me</h1>
          <p className='mb-12 max-w-s,'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum <b>has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley </b> of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, 

          <br />
          <br />    
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <Link to={'/portfolio'} className='btn'>View My Services</Link>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
