import React from "react";
import MatrixBackground from "./MatrixBackground";

const HeroSection: React.FC = () => {
  return (
    <section className='relative min-h-[40rem] md:min-h-[48rem] px-4 pb-4 pt-[calc(var(--navbar-height)+32px)] text-white md:px-6 md:pb-6 lg:pt-[calc(var(--navbar-height)+48px)] mb-18 md:mb-28'>
      <MatrixBackground imageUrl='/_next/static/media/gradient-hero-prerender.3af0e196.webp' />

      <div className='relative z-10 max-w-[1808px] mx-auto'>
        <div className='flex flex-col gap-6 md:gap-12 pt-12 md:pt-20'>
          <div className='relative z-50 px-4 md:px-0'>
            <h1 className='text-4xl md:text-6xl font-semibold leading-tight tracking-tight'>
              The AI
              <br className='md:hidden' /> Code Editor
            </h1>
          </div>

          <div className='relative z-50 mb-6 px-4 md:-mb-6 md:px-0'>
            <p className='font-mono text-base md:text-xl'>
              Built to make you extraordinarily productive, Cursor is the best
              way to code with AI.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-4 px-5'>
            <button className='group relative rounded-xl p-1 border border-white/30 flex flex-col'>
              <span className='relative inline-flex w-full items-center justify-center gap-4 px-4 py-4 rounded-lg uppercase font-mono text-sm md:text-base font-semibold bg-black text-white'>
                <span className='flex items-center gap-3'>
                  <svg
                    className='w-4 h-4 md:w-6 md:h-6'
                    fill='none'
                    viewBox='0 0 14 18'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.5545 6.1362c-.0997.081-1.8609 1.1196-1.8609 3.429 0 2.6712 2.241 3.6162 2.3081 3.6396-.0103.0576-.356 1.2942-1.1816 2.5542-.7361 1.1088-1.5049 2.2158-2.6744 2.2158-1.16953 0-1.47052-.711-2.82064-.711-1.31572 0-1.78354.7344-2.85332.7344-1.06977 0-1.81621-1.026-2.67444-2.286C.8032 14.2326 0 11.934 0 9.7524c0-3.4992 2.17396-5.355 4.31351-5.355 1.13686 0 2.08452.7812 2.79828.7812.67936 0 1.73882-.828 3.03221-.828.4902 0 2.2513.0468 3.4105 1.7856Zm-4.02453-3.267c.53493-.6642.91323-1.5858.91323-2.5074 0-.1278-.0103-.2574-.0326-.3618-.87031.0342-1.90569.6066-2.53001 1.3644-.49017.5832-.94767 1.5048-.94767 2.439 0 .1404.02236.2808.03268.3258.05504.0108.14447.0234.23391.0234.78083 0 1.7629-.5472 2.33046-1.2834Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>Download for MacOS</span>
                </span>
              </span>
            </button>

            <a
              href='/downloads'
              className='group relative rounded-xl p-1 border border-white/30 flex flex-col'
            >
              <span className='relative inline-flex w-full items-center justify-center gap-4 px-4 py-4 rounded-lg uppercase font-mono text-sm md:text-base font-semibold bg-white text-black'>
                <span>All Downloads</span>
              </span>
            </a>
          </div>

          <div className='relative z-10 mt-8'>
            <div className='overflow-hidden rounded-md bg-[#171717]'>
              <img
                alt='Cursor Demo'
                src='/_next/static/media/watch-demo.7a9056ad.webp'
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
