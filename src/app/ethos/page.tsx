"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/ethos/image1.png";
import Image2 from "@/assets/ethos/image2.jpeg";
import Image3 from "@/assets/ethos/image3.jpeg";
import Image4 from "@/assets/ethos/image4.jpeg";
import Image5 from "@/assets/ethos/image5.jpg";
import Image from "next/image";

export default function Home() {
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const handleScrollChange = () => {
    // Scroll change handler for future use
  };

  const scrollToStart = () => {
    scrollContainerRef.current?.resetScroll();
  };

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={BGImage}
          alt='Background image of ethos'
          className='w-full h-full object-cover min-w-full min-h-full'
        />
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} buttonClassName='text-[#d6d5c9] font-[300] text-[13px] uppercase tracking-wider' />

      {/* Main Content */}
      <main className='relative z-10 container pt-24 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* text content */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-6 lg:pl-8 text-center md:text-left space-y-6'>
            <div className='space-y-6'>
              <h1 className='text-[#d5d5c8] font-serif text-2xl sm:text-3xl font-semibold uppercase tracking-wider'>THE ETHOS</h1>
              <h2 className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>Our work is guided by feeling.</h2>

              <div className='space-y-4'>
                <div>
                  <h3 className='text-[#d5d5c8] font-[300] text-base font-medium'>Peace</h3>
                  <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                    The design should ground you. Light, air, and materials that calm the nervous system.
                  </p>
                </div>

                {/* vertical bar */}
                <div className='w-8 h-px bg-[#d5d5c8]/40 mx-auto md:mx-0'></div>

                <div>
                  <h3 className='text-[#d5d5c8] font-[300] text-base font-medium'>Simplicity</h3>
                  <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                    Nothing extra. Everything necessary. Beauty found in restraint.
                  </p>
                </div>

                {/* vertical bar */}
                <div className='w-8 h-px bg-[#d5d5c8]/40 mx-auto md:mx-0'></div>

                <div>
                  <h3 className='text-[#d5d5c8] font-[300] text-base font-medium'>Flow</h3>
                  <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                    From one room to the next, one breath to the next—our work moves like water.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* image 1 - Peace & Serenity */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 md:px-0 my-8 sm:my-10 lg:my-0 group'>
            <div className='hidden lg:flex absolute bg-[#574f4d] text-[#d5d5c8] font-[300] text-base w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='block'>
                <strong>Peace:</strong> Natural materials that ground and calm. Stone, timber, and light work together to soothe the nervous system.
              </span>
            </div>
            <div className='relative overflow-hidden rounded-lg'>
              <ImageZoom 
                src={Image1} 
                alt='Peace & Serenity' 
                className='w-full lg:h-[60vh] h-[220px] sm:h-[280px] md:h-[300px] object-cover group-hover:brightness-75 transition-all duration-300' 
              />
            </div>
            
            {/* Mobile text below image */}
            <div className='lg:hidden mt-4 text-center md:text-left'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                <strong>Peace:</strong> Natural materials that ground and calm. Stone, timber, and light work together to soothe the nervous system.
              </p>
            </div>
          </div>

          {/* image 2 - Simplicity & Restraint */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 md:px-0 my-8 sm:my-10 lg:my-0 group'>
            <div className='hidden lg:flex absolute bg-[#574f4d] text-[#d5d5c8] font-[300] text-base w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='block'>
                <strong>Simplicity:</strong> Beauty in restraint. Clean lines and minimal elements create spaces that breathe naturally.
              </span>
            </div>
            <div className='relative overflow-hidden rounded-lg'>
              <ImageZoom 
                src={Image2} 
                alt='Simplicity & Restraint' 
                className='w-full lg:h-[60vh] h-[220px] sm:h-[280px] md:h-[300px] object-cover group-hover:brightness-75 transition-all duration-300' 
              />
            </div>
            
            {/* Mobile text below image */}
            <div className='lg:hidden mt-4 text-center md:text-left'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                <strong>Simplicity:</strong> Beauty in restraint. Clean lines and minimal elements create spaces that breathe naturally.
              </p>
            </div>
          </div>

          {/* image 3 - Flow & Movement */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 md:px-0 my-8 sm:my-10 lg:my-0 group'>
            <div className='hidden lg:flex absolute bg-[#574f4d] text-[#d5d5c8] font-[300] text-base w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='block'>
                <strong>Flow:</strong> Spaces that guide you effortlessly. Thoughtful transitions create a sense of movement and connection throughout the home.
              </span>
            </div>
            <div className='relative overflow-hidden rounded-lg'>
              <ImageZoom 
                src={Image3} 
                alt='Flow & Movement' 
                className='w-full lg:h-[60vh] h-[220px] sm:h-[280px] md:h-[300px] object-cover group-hover:brightness-75 transition-all duration-300' 
              />
            </div>
            
            {/* Mobile text below image */}
            <div className='lg:hidden mt-4 text-center md:text-left'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                <strong>Flow:</strong> Spaces that guide you effortlessly. Thoughtful transitions create a sense of movement and connection throughout the home.
              </p>
            </div>
          </div>

          {/* image 4 - Light & Shadow */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 md:px-0 my-8 sm:my-10 lg:my-0 group'>
            <div className='hidden lg:flex absolute bg-[#574f4d] text-[#d5d5c8] font-[300] text-base w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='block'>
                <strong>Light & Shadow:</strong> The interplay of light and shadow creates depth and atmosphere, changing throughout the day to shape the mood of each space.
              </span>
            </div>
            <div className='relative overflow-hidden rounded-lg'>
              <ImageZoom 
                src={Image4} 
                alt='Light & Shadow' 
                className='w-full lg:h-[60vh] h-[220px] sm:h-[280px] md:h-[300px] object-cover group-hover:brightness-75 transition-all duration-300' 
              />
            </div>
            
            {/* Mobile text below image */}
            <div className='lg:hidden mt-4 text-center md:text-left'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                <strong>Light & Shadow:</strong> The interplay of light and shadow creates depth and atmosphere, changing throughout the day to shape the mood of each space.
              </p>
            </div>
          </div>

          {/* image 5 - Materiality */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-4 sm:px-6 md:px-0 my-8 sm:my-10 lg:my-0 group'>
            <div className='hidden lg:flex absolute bg-[#574f4d] text-[#d5d5c8] font-[300] text-base w-[55%] h-[50%] px-6 py-5 lg:mr-[60px] lg:-mb-[1px] bottom-0 right-0 justify-center items-center text-right leading-relaxed z-10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='block'>
                <strong>Materiality:</strong> Honest materials that age gracefully. We celebrate the natural beauty of wood, stone, and metal, allowing their textures and patinas to tell a story over time.
              </span>
            </div>
            <div className='relative overflow-hidden rounded-lg'>
              <ImageZoom 
                src={Image5} 
                alt='Materiality' 
                className='w-full lg:h-[60vh] h-[220px] sm:h-[280px] md:h-[300px] object-cover group-hover:brightness-75 transition-all duration-300' 
              />
            </div>
            
            {/* Mobile text below image */}
            <div className='lg:hidden mt-4 text-center md:text-left'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                <strong>Materiality:</strong> Honest materials that age gracefully. We celebrate the natural beauty of wood, stone, and metal, allowing their textures and patinas to tell a story over time.
              </p>
            </div>
          </div>

        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        <button
          onClick={scrollToStart}
          className='fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 text-[#d5d5c8] p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm'
          aria-label='Go back to start'
        >
          <svg
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='rotate-180'
          >
            <polyline points='9,18 15,12 9,6'></polyline>
          </svg>
        </button>
      </main>
    </div>
  );
}
