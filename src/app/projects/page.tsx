"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// components
import { HorizontalScrollContainer, HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// assets
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/projects/image1.jpeg";
import Image2 from "@/assets/projects/image2.jpeg";
import Image3 from "@/assets/projects/image3.jpeg";
import Image4 from "@/assets/projects/image4.jpeg";
import Image5 from "@/assets/projects/image5.jpeg";
import Image6 from "@/assets/projects/image6.jpeg";
import BGImage from "@/assets/projects/background.jpg";

// types
interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

export default function Projects() {
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
          alt='Background image of projects'
          className='w-full h-full object-cover min-w-full min-h-full'
        />
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} buttonClassName='text-[#d5d5c8] font-[300] text-[13px] uppercase tracking-wider' />

      {/* Main Content */}
      <main className='relative z-10 container pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pl-0'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* Section 1: Our Projects */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-0 lg:pl-0 text-center md:text-left space-y-4'>
            <h1 className='text-[#d5d5c8] font-serif text-[24px] uppercase tracking-wider leading-tight'>OUR PROJECTS</h1>
            
            <div className='space-y-2 mx-auto md:mx-0 max-w-[90%] md:max-w-full'>
              <h2 className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>Introducing a New Model for Living</h2>

              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                Our work goes beyond design — it&apos;s about reimagining what a home can feel like. Each project is
                shaped by a philosophy rooted in simplicity, natural flow, and emotional connection. We build spaces that
                restore, calm, and support the real lives of the people inside them.
              </p>

              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                But more than that, our goal is to expand a model of living that&apos;s regenerative, timeless, and deeply
                human. This is slow architecture — built with care, not convention.
              </p>

              <div className='pt-2 space-y-2'>
                <div>
                  <h3 className='text-[#d5d5c8] font-[300] text-base font-medium'>THE QUARRY</h3>
                  <div className='w-8 h-px bg-[#d5d5c8]/40 mt-2 mx-auto md:mx-0'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Images 1 & 2 for Our Projects section */}
          <div className='flex flex-col gap-4 lg:ml-[1vw] w-full px-4 sm:px-6 md:pl-0 lg:pl-0 my-6 lg:my-0 items-center md:items-start'>
            <ImageZoom
              src={Image1}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image2}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* Section 2: The Quarry Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-0 lg:pl-0 text-center md:text-left space-y-4'>
            <h1 className='text-[#d5d5c8] font-serif text-[24px] uppercase tracking-wider leading-tight'>The Quarry</h1>
            <div className='space-y-2 mx-auto md:mx-0 max-w-[90%] md:max-w-full'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                Nestled in a field of wildflowers, The Meadow is a celebration of organic forms and natural light. The
                structure's gentle curves and warm wood tones create a sense of movement that mirrors the surrounding
                landscape.
              </p>

              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                Designed for connection—to nature, to art, and to each other—this home features open, flowing spaces that
                encourage gathering and contemplation in equal measure. It's a place where every detail tells a story of
                craftsmanship and intention.
              </p>

              <div className='pt-2 space-y-4'>
                <div>
                  <h2 className='text-[#d5d5c8] font-[300] text-lg uppercase'>Get in Touch</h2>
                  <div className='w-8 h-px bg-[#d5d5c8]/50 mt-2'></div>
                </div>

                <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                  Interested in working together? We'd love to hear about your project.
                </p>

                <Link
                  href='/contact'
                  className='text-[#d5d5c8] font-[300] text-base hover:underline transition-all duration-300 inline-block'
                >
                  Start Your Journey →
                </Link>
              </div>
            </div>
            <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
              Rooted in Christopher's aesthetic and philosophical influences — from Wabi-Sabi to biophilia — the design
              brings nature inward and emotion to the forefront. Light, material, and movement are all treated as
              collaborators, not afterthoughts.
            </p>
            <p className='text-[#d6d5c9] font-[300] text-base leading-relaxed text-center md:text-left'>
              Every line is drawn with intention. Local stone, minimal interventions, and breathable textures make the
              home feel like it's always belonged.
            </p>
          </div>

          {/* Images 3 & 4 for The Quarry section */}
          <div className='flex flex-col gap-4 lg:ml-[1vw] w-full px-4 sm:px-6 md:pl-0 lg:pl-0 my-6 lg:my-0 items-center md:items-start'>
            <ImageZoom
              src={Image3}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image4}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* Section 3: The Cliffs Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-6 lg:pl-8 text-center md:text-left space-y-6'>
            <div className='space-y-4 mx-auto md:mx-0 max-w-[90%] md:max-w-full'>
              <p className='text-[#d6d5c9] font-[300] text-base leading-relaxed text-center md:text-left'>
              The Quarry redefines modern living with its seamless integration of natural materials and clean lines. Each
              space is designed to enhance the connection between indoor comfort and the surrounding landscape, creating
              a sanctuary that feels both luxurious and organic.
            </p>

            <p className='text-[#d6d5c9] font-[300] text-base leading-relaxed text-center md:text-left'>
              Every detail, from the hand-selected stone to the custom millwork, reflects a commitment to craftsmanship
              and sustainability. The result is a home that stands as a testament to thoughtful, intentional design.
            </p>

              <div className='pt-4'>
                <h2 className='text-[#d6d5c9] font-[300] text-lg uppercase text-center md:text-left'>THE CLIFFS</h2>
                <div className='w-8 h-px bg-[#d5d5c8]/50 mt-2 mx-auto md:mx-0'></div>
              </div>
            </div>
          </div>

          {/* section 3: Investment Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 md:pl-6 lg:pl-8 mx-auto md:mx-0 max-w-[90%] md:max-w-full'>
            <p className='text-[#d6d5c9] font-[300] text-base leading-relaxed text-center md:text-left'>
              As an investment, The Quarry offers a fixed return of 14–20% annually, with capital protected via a
              ring-fenced SPV and detailed development guarantees. Investors are not just backing a build — they're
              aligning with a new, grounded vision of sustainable living.
            </p>
            <br />
            <p className='text-[#d6d5c9] font-[300] text-base leading-relaxed text-center md:text-left'>
              This is a home that feels like a turning point — for design, for lifestyle, and for what comes next.
            </p>

            {/* get in touch */}
            <Link href={"/contact"}>
              <h2 className='text-[#d6d5c9] font-[300] text-lg uppercase mt-48 text-center md:text-left'>Get in Touch</h2>
              <div className='-mt-2 w-8 h-px bg-white/50'></div>
            </Link>
          </div>

          {/* Images 5 & 6 for Investment Details section */}
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image5}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image6}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>
          <div className='hidden lg:block lg:min-w-[2vw]'></div>
        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        {/* Removed scroll controls as menu is always visible */}
      </main>
    </div>
  );
}
