"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/story/image1.jpeg";
import Image2 from "@/assets/story/image2.jpg";
import Image3 from "@/assets/story/image3.jpg";
import Image4 from "@/assets/story/image4.jpg";
import Image from "next/image";

export default function Story() {
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
          alt='Background image of story'
          className='w-full h-full object-cover min-w-full min-h-full'
        />
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} buttonClassName='text-[#d6d5c9] font-[300] text-[13px] uppercase tracking-wider' />

      {/* Main Content */}
      <main className='relative z-10 container pt-32 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* text content */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-4 sm:px-6'>
            <h1 className='text-[#d5d5c8] font-serif text-[24px] uppercase tracking-wider leading-tight text-left'>OUR STORY</h1>
            
            <div className='mt-8'>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left mb-3'>
                Design should hold you, not overwhelm you.
              </p>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left mb-3'>
                My approach to design isn&apos;t rooted in trends.
              </p>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left mb-3'>
                It&apos;s rooted in experience, intuition, and an ongoing
              </p>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left mb-6'>
                relationship with stillness, light, and nature.
              </p>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left mb-3'>
                Everything I create begins with one question:
              </p>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left italic mb-3'>
                How should this space make you feel?
              </p>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left'>
                That feeling guides every decision.
              </p>
            </div>
            
            <div className='mt-8'>
              <h3 className='text-[#d5d5c8] font-[300] text-[16px] uppercase tracking-wider text-left hover:underline cursor-pointer transition-all duration-300'>FUTURE PROJECTS</h3>
              <div className='w-8 h-px bg-[#d5d5c8]/50 mt-2'></div>
            </div>
          </div>

          {/* image 1 */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-0 my-6 sm:my-8 lg:my-0'>
            <div className='relative overflow-hidden'>
              <ImageZoom src={Image1} alt='Story Image 1' className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover' />
            </div>
          </div>

          {/* text content 2 */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-30 w-full max-w-[900px] px-4 sm:px-6'>
            <div className='mt-8 space-y-6'>
              <div className='bg-[#d5d5c8]/10 p-6 rounded-lg border border-[#d5d5c8]/20'>
                <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                  &ldquo;Design should hold you, not overwhelm you.&rdquo;
                </p>
              </div>
              
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                Every space I design is a reflection of this philosophy. It&apos;s about creating environments that support and nurture, rather than dominate and distract.
              </p>
              
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                I believe that the best designs are those that feel inevitable—as if they&apos;ve always been there, waiting to be discovered.
              </p>
            </div>
          </div>

          {/* image 2 */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-0 my-6 sm:my-8 lg:my-0'>
            <div className='relative overflow-hidden'>
              <ImageZoom src={Image2} alt='Story Image 2' className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover' />
            </div>
          </div>

          {/* text content 3 */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-10 w-full max-w-[900px] px-4 sm:px-6'>
            <h1 className='text-[#d5d5c8] font-serif text-[24px] uppercase tracking-wider leading-tight text-left'>OUR STORY</h1>
            
            <div className='mt-8 space-y-3'>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left'>
                Nature has been my greatest teacher. The way light filters through leaves, how stone ages gracefully, the rhythm of seasons—these are the patterns I bring into every design.
              </p>
              
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-[1.5] text-left'>
                I&apos;ve learned that the most beautiful spaces are those that honor these natural rhythms and create harmony between the built environment and the world around us.
              </p>
            </div>
          </div>

          {/* image 3 */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-0 my-6 sm:my-8 lg:my-0'>
            <div className='relative overflow-hidden'>
              <ImageZoom src={Image3} alt='Story Image 3' className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover' />
            </div>
          </div>

          {/* text content 4 */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-4 w-full max-w-[900px] px-4 sm:px-6'>
            <div className='mt-8 space-y-6'>
              <div className='bg-[#d5d5c8]/10 p-6 rounded-lg border border-[#d5d5c8]/20'>
                <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                  &ldquo;How should this space make you feel?&rdquo;
                </p>
              </div>
              
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                This question is the foundation of my design process. Before I draw a single line or choose a material, I need to understand the emotional journey you want to experience.
              </p>
              
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                Whether it&apos;s a sense of calm, inspiration, connection, or joy—every design decision serves that feeling. The result is spaces that don&apos;t just look beautiful, but feel right.
              </p>
            </div>
          </div>

          {/* image 4 */}
          <div className='relative lg:max-w-[50vw] lg:min-w-[500px] lg:h-[60vh] lg:ml-[1vw] lg:mt-4 w-full h-auto px-0 my-6 sm:my-8 lg:my-0'>
            <div className='relative overflow-hidden'>
              <ImageZoom src={Image4} alt='Story Image 4' className='w-full lg:h-[60vh] h-[200px] sm:h-[250px] md:h-[300px] object-cover' />
            </div>
          </div>

          {/* final text content */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] lg:pl-0 w-full max-w-[900px] px-0 sm:px-0'>
            <div className='mt-8 space-y-6'>
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                My story is one of continuous learning and deepening understanding. Every project teaches me something new about how spaces can serve, inspire, and transform the people who inhabit them.
              </p>
              
              <div className='bg-[#d5d5c8]/10 p-6 rounded-lg border border-[#d5d5c8]/20'>
                <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                  &ldquo;That feeling guides every decision.&rdquo;
                </p>
              </div>
              
              <p className='text-[#d5d5c8] font-[300] text-[16px] leading-relaxed'>
                This is my promise to you: every space I design will be guided by feeling, rooted in nature, and created with the intention to hold you gently, not overwhelm you.
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
