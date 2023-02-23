import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I am <br/><span className='text-cyan-600'>Parvez Ahmed Ansari,</span><br/> nice to meet you. Please take a look around.</p>
            </div>
            
            <div>
              <p className='text-justify'>I am a Full Stack Web Developer through AlmaBetter. I learned frontend
                technologies: HTML, CSS, Javascript with frameworks: React JS, Tailwind CSS and Bootstrap, Backend technologies: Node JS
                with framework Express JS and database hiding with Mongo DB and SQL. My objective is simply to be the best
                developer that I can be and to contribute to the technology industry all that I know and can do. I am
                dedicated to perfecting my craft by learning from more seasoned developers , remaining humble, and
                continiously making strides to learn all that I can about developement. I will continue to contribute my
                overall success as a developer.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
