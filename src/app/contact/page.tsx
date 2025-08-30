"use client";
import Header from "@/components/Header";
import Logo from "@/assets/home/logo.png";
import { useEffect, useState, useActionState } from "react";
import Image from "next/image";
import BGImage from "@/assets/home/bg.png";

import InstaIcon from "@/assets/contacts/CP insta icon.png";
import PinterestIcon from "@/assets/contacts/CP pinterest icon.png";
import ImageZoom from "@/components/shared/ImageZoom";
import { sendContactEmail } from "./actions";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    ok: null,
    message: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // reset the form on successful send
  useEffect(() => {
    if (state.ok) setFormData({ name: "", email: "", message: "" });
  }, [state.ok]);

  return (
    <div className='relative min-h-screen overflow-y-auto'>
      {/* Background: static image base, video overlay only on md+ to save bandwidth */}
      <div className='absolute inset-0 z-0'>
        <Image src={BGImage} alt='Background' fill className='object-cover' priority />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='none'
          poster='./media/video-poster.png'
          aria-hidden='true'
          className='hidden md:block w-full h-full object-cover min-w-full min-h-full'
        >
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} />

      {/* Main Content */}
      <main className='relative z-10 container py-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32'>
        <div className='mx-auto max-w-6xl px-4 sm:px-6 md:px-8'>
          <div className='grid grid-cols-1 gap-12 items-start lg:grid-cols-2'>
            {/* Left Side - Contact Info */}
            <div className='mt-12 sm:mt-16 space-y-8 text-center md:text-left'>
              <div className='font-sans font-light text-2xl text-[#574f4d] leading-relaxed'>
                <p>Please get in touch by completing the</p>
                <p>form or emailing:</p>
                <p className='mt-4'>
                  <a 
                    href='mailto:christopher@christopherpoole.design' 
                    className='hover:opacity-80 transition-opacity inline-block'
                  >
                    christopher@christopherpoole.design
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className='mt-12'>
                <p className='text-[#574f4d] font-light mb-4'>Connect with us:</p>
                <div className='flex justify-center md:justify-start space-x-6'>
                  {/* Instagram Icon */}
                  <a
                    href='https://www.instagram.com/yourusername'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 hover:opacity-75 transition-opacity'
                    aria-label='Instagram'
                  >
                    <Image 
                      src={InstaIcon} 
                      alt='Instagram' 
                      className='w-full h-full object-contain'
                      width={40}
                      height={40}
                    />
                  </a>

                  {/* Pinterest Icon */}
                  <a
                    href='https://www.pinterest.com/yourusername'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 hover:opacity-75 transition-opacity'
                    aria-label='Pinterest'
                  >
                    <Image 
                      src={PinterestIcon} 
                      alt='Pinterest' 
                      className='w-full h-full object-contain'
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className='bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg'>
              <h2 className='text-2xl sm:text-3xl font-light text-[#574f4d] mb-6 sm:mb-8 text-center md:text-left'>Send us a message</h2>
              <form action={formAction} className='space-y-6'>
                <div className='mb-6'>
                  <label htmlFor='name' className='block text-sm font-medium text-[#574f4d] mb-2 text-left'>
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 py-2 border border-[#d1d1d1] rounded-md focus:ring-1 focus:ring-[#574f4d] focus:border-[#574f4d] outline-none transition-all text-[#574f4d]'
                    required
                  />
                </div>

                <div className='mb-6'>
                  <label htmlFor='email' className='block text-sm font-medium text-[#574f4d] mb-2 text-left'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-2 border border-[#d1d1d1] rounded-md focus:ring-1 focus:ring-[#574f4d] focus:border-[#574f4d] outline-none transition-all text-[#574f4d]'
                    required
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-[#574f4d] mb-2 text-left'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className='w-full px-4 py-2 border border-[#d1d1d1] rounded-md focus:ring-1 focus:ring-[#574f4d] focus:border-[#574f4d] outline-none transition-all text-[#574f4d]'
                    required
                  />
                </div>

                {state.message && (
                  <p className={`mt-4 text-sm text-center md:text-left ${state.ok ? 'text-green-600' : 'text-red-600'}`}>
                    {state.message}
                  </p>
                )}

                {/* Submit Button with Chevron Forward Icon */}
                <div className='flex justify-end'>
                  <button
                    type='submit'
                    disabled={isPending}
                    className='w-full bg-[#574f4d] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-sm uppercase tracking-wider flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed max-w-xs mx-auto md:mx-0'
                    aria-label='Submit form'
                  >
                    {isPending ? (
                      <>
                        <svg
                          className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
