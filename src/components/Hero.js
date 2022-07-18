import React from 'react';

// import images
import Image from '../assets/img/hero-img.png';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Hero = () => {
  return (
    <section className='text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <div className='bg-white/10 p-[4px] mb-6 rounded-full pl-1 pr-3 max-w-[365px]'>
              <div className='flex items-center justify-between text-sm lg:text-base'>
                <div className='bg-white text-darkblue rounded-full font-medium py-[4px] px-4'>
                  75% SAVE
                </div>
                <div>For the Black Friday weekend</div>
              </div>
            </div>
            <h1 className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'>
              Fastest & secure platform to invest in crypto
            </h1>
            <p className='max-w-[440px] leading-relaxed mb-8'>
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button className='btn gap-x-6 pl-6'>
              Try for FREE
              <IoIosArrowDroprightCircle className='text-3xl' />
            </button>
          </div>
          {/* image */}
          <div className='flex-1'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
