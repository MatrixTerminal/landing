"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import { XIcon } from "@/components/XIcon";

// Initialize fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleConnect = () => {
    window.location.href = "https://thematrix.app";
  };

  // Initialize and run the matrix animation
  useEffect(() => {
    // Enforce dark mode on client-side
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Making the canvas full screen
    const resizeCanvas = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Matrix characters
    const matrix =
      "0123456789abcdefABCDEF₿ΞΨ♦️₮Ł∞☰⧉Ω◈⬢⌘฿◊{}[]()<>_|:;,.+-*/=~!@#$%^&*0x1x2x3xf9b4b2f1c9d8a7e6c5b4a30x1234567890xdefi0xenable0xswap0xabcdef";

    const matrixChars = matrix.split("");

    const font_size = 10;
    const columns = canvas.width / font_size; // Number of columns for the rain

    // An array of drops - one per column
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * canvas.height);
    }

    // Drawing the characters
    const draw = () => {
      // Black BG for the canvas with opacity to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 0.6;
      ctx.fillStyle = "#47D8A3"; // Green primary color theme
      ctx.font = font_size + "px arial";

      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // Sending the drop back to the top randomly after it has crossed the screen
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 55);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-black text-white`}
    >
      <div className='relative flex flex-col min-h-screen bg-black text-white overflow-hidden'>
        {/* Matrix animation canvas as background */}
        <canvas
          ref={canvasRef}
          className='fixed inset-0 z-0'
          style={{ display: "block" }}
        />
        {/* Overlay to dim the matrix animation */}
        <div className='fixed inset-0 z-0 bg-black/10 backdrop-blur-[2px]'></div>

        <div className='relative w-full h-64 md:h-96 z-30 md:mt-40'>
          <Image
            src='/logo_with_outline.png'
            alt='Matrix Logo'
            fill
            style={{ objectFit: "contain" }}
            priority
            className='filter drop-shadow-2xl animate-floating relative md:px-20 z-30'
          />
        </div>
        {/* Hero Section */}
        <div className='relative mt-[-60px] px-4 md:px-10 z-10 max-w-7xl mx-auto w-full'>
          <div className='flex flex-col items-center justify-between gap-10'>
            <div className='relative'>
              <div className='absolute inset-0 blur-3xl bg-gradient-to-r from-primary/30 via-transparent to-primary/20 opacity-20'></div>
              <h1 className='text-6xl md:text-8xl font-bold text-white tracking-tighter leading-tight'>
                The{" "}
                <span className='bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent'>
                  AI-Powered
                </span>{" "}
                <br className='hidden md:block' />
                Trading Terminal
              </h1>
            </div>
            <p className='text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto'>
              Built to make you{" "}
              <span className='text-white font-semibold'>
                extraordinarily productive
              </span>
              , The Matrix is the best way to trade with AI assistance.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 pt-8'>
              <button
                onClick={handleConnect}
                className='group relative px-8 py-4 bg-primary text-black font-bold rounded-xl text-xl
                           shadow-[0_0_30px_rgba(71,216,163,0.4)] hover:shadow-[0_0_50px_rgba(71,216,163,0.6)]
                           hover:bg-primary/95 transition-all duration-300 transform hover:scale-105 active:scale-95'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 rounded-xl opacity-50 animate-shine'></div>
                Get Started
              </button>
              <a
                href='#learn-more'
                className='group relative px-8 py-4 bg-gray-900/80 text-white font-medium rounded-xl text-xl
                           border border-primary/30 hover:border-primary/50 hover:bg-gray-900/90 
                           transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95'
              >
                Learn More
                <svg
                  className='ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className='mt-40 space-y-48 relative'>
            {/* Background accent */}
            <div className='absolute top-1/4 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl opacity-30'></div>

            <div className='flex flex-col md:flex-row items-center gap-16'>
              <div className='md:w-1/2 space-y-6 order-2 md:order-1 px-6'>
                <div className='inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-semibold mb-2'>
                  Advanced Analytics
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight'>
                  Advanced Market <span className='text-primary'>Analysis</span>
                </h2>
                <p className='text-xl text-gray-300 leading-relaxed'>
                  Our AI analyzes market data in real-time, providing you with
                  actionable insights and trading opportunities.
                </p>
                <ul className='space-y-4 text-gray-300 pt-2'>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Pattern recognition across multiple timeframes
                    </span>
                  </li>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Sentiment analysis from news and social media
                    </span>
                  </li>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Correlation detection between assets
                    </span>
                  </li>
                </ul>
              </div>
              <div className='md:w-1/2 relative h-80 md:h-96 order-1 md:order-2'>
                <div className='absolute -inset-10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl opacity-30 rounded-full'></div>
                <div className='w-full h-full relative overflow-hidden rounded-2xl border border-primary/20 bg-gray-900/70 backdrop-blur-sm shadow-[0_0_35px_rgba(0,0,0,0.4)]'>
                  <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent'></div>
                  <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent'></div>
                  <div className='absolute inset-0 flex items-center justify-center text-primary text-lg font-mono'>
                    [Chart Visualization Placeholder]
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-16'>
              <div className='md:w-1/2 relative h-80 md:h-96'>
                <div className='absolute -inset-10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl opacity-30 rounded-full'></div>
                <div className='w-full h-full relative overflow-hidden rounded-2xl border border-primary/20 bg-gray-900/70 backdrop-blur-sm shadow-[0_0_35px_rgba(0,0,0,0.4)]'>
                  <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent'></div>
                  <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent'></div>
                  <div className='absolute inset-0 flex items-center justify-center text-primary text-lg font-mono'>
                    [Risk Management Interface Placeholder]
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 space-y-6 px-6'>
                <div className='inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-semibold mb-2'>
                  Risk Management
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight'>
                  Intelligent{" "}
                  <span className='text-primary'>Risk Management</span>
                </h2>
                <p className='text-xl text-gray-300 leading-relaxed'>
                  Let our AI handle risk calculations and position sizing based
                  on your trading strategy and risk tolerance.
                </p>
                <ul className='space-y-4 text-gray-300 pt-2'>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Automated position sizing
                    </span>
                  </li>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Dynamic stop-loss and take-profit levels
                    </span>
                  </li>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Portfolio exposure monitoring
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-16'>
              <div className='md:w-1/2 space-y-6 order-2 md:order-1 px-6'>
                <div className='inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-semibold mb-2'>
                  Natural Language
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight'>
                  Natural Language <span className='text-primary'>Trading</span>
                </h2>
                <p className='text-xl text-gray-300 leading-relaxed'>
                  Simply type your trading intention, and our AI will understand
                  and execute it for you.
                </p>
                <ul className='space-y-4 text-gray-300 pt-2'>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Execute complex orders with simple text
                    </span>
                  </li>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Ask for market analysis in plain English
                    </span>
                  </li>
                  <li className='flex items-center group'>
                    <div className='flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <span className='ml-3 group-hover:text-white transition-colors duration-300'>
                      Get answers to your trading questions
                    </span>
                  </li>
                </ul>
              </div>
              <div className='md:w-1/2 relative h-80 md:h-96 order-1 md:order-2'>
                <div className='absolute -inset-10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl opacity-30 rounded-full'></div>
                <div className='w-full h-full relative overflow-hidden rounded-2xl border border-primary/20 bg-gray-900/70 backdrop-blur-sm shadow-[0_0_35px_rgba(0,0,0,0.4)]'>
                  <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent'></div>
                  <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent'></div>
                  <div className='absolute inset-0 flex items-center justify-center text-primary text-lg font-mono'>
                    [AI Chat Interface Placeholder]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-48 mb-32 text-center relative'>
            <div className='absolute -inset-40 bg-primary/5 blur-3xl rounded-full opacity-30 -z-10'></div>
            <div className='max-w-4xl mx-auto p-12 bg-gray-900/70 backdrop-blur-md rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]'>
              <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent'></div>
              <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>

              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
                Ready to <span className='text-primary'>Transform</span> Your
                Trading?
              </h2>
              <p className='text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto'>
                Join thousands of traders using The Matrix to gain an edge in
                the markets with AI-powered insights.
              </p>
              <button
                onClick={handleConnect}
                className='group relative px-10 py-5 bg-primary text-black font-bold rounded-xl text-xl md:text-2xl
                         shadow-[0_0_30px_rgba(71,216,163,0.4)] hover:shadow-[0_0_50px_rgba(71,216,163,0.6)]
                         hover:bg-primary/95 transition-all duration-300 transform hover:scale-105 active:scale-95'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 rounded-xl opacity-50 animate-shine'></div>
                Enter The Matrix
              </button>
              <p className='mt-6 text-gray-400 text-sm'>
                No credit card required. Get started in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className='relative z-20 bg-black/70 backdrop-blur-xl border-t border-primary/10 py-16'>
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent'></div>
          <div className='max-w-7xl mx-auto px-6 md:px-10'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-12'>
              <div className='md:w-1/3'>
                <div className='flex items-center mb-6'>
                  <div className='relative mr-3'>
                    <div className='absolute -inset-1 bg-primary/20 blur-md rounded-full opacity-50'></div>
                    <Image
                      src='/logo.png'
                      alt='Matrix Logo'
                      width={80}
                      height={40}
                      priority
                      className='relative invert'
                    />
                  </div>
                </div>
                <p className='text-gray-400 text-base max-w-xs'>
                  The next generation AI-powered trading terminal. Trade
                  smarter, not harder with real-time insights.
                </p>

                <div className='flex space-x-4 mt-6'>
                  <a
                    href='https://x.com/thematrixapp'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                                text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-300'
                  >
                    <XIcon className='h-5 w-5' />
                  </a>
                  <a
                    href='https://github.com/MatrixTerminal/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                                text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-300'
                  >
                    <Github className='h-5 w-5' />
                  </a>
                  <a
                    href='https://t.me/the_matrix_official'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                                text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-300'
                  >
                    <svg
                      className='h-5 w-5'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.5c0 .29-.183.681-.544.681-1.15 0-1.956-1.382-1.956-1.382l-2.75-4.5s-.334-.544-.334-1.169c0-.625.544-1.042.544-1.042l4.5-3.251s.387-.262.668-.262c.281 0 .625.25.625.625l-.312 3.5 7.375 3.5s.459.166.459.697c0 .53-.469.712-.469.712l-7.375 3.75-.25-1.344z'></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16'>
                <div>
                  <h3 className='font-medium text-white text-lg mb-4 relative inline-block'>
                    Product
                    <span className='absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary/50'></span>
                  </h3>
                  <ul className='space-y-3 text-gray-400'>
                    <li>
                      <a
                        href='#features'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Features
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#pricing'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Pricing
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#documentation'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Documentation
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#releases'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Releases
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='font-medium text-white text-lg mb-4 relative inline-block'>
                    Company
                    <span className='absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary/50'></span>
                  </h3>
                  <ul className='space-y-3 text-gray-400'>
                    <li>
                      <a
                        href='#about'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        About
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#blog'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Blog
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#careers'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Careers
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#contact'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Contact
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='font-medium text-white text-lg mb-4 relative inline-block'>
                    Resources
                    <span className='absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary/50'></span>
                  </h3>
                  <ul className='space-y-3 text-gray-400'>
                    <li>
                      <a
                        href='#community'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Community
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#tutorials'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Tutorials
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#faq'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        FAQ
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#support'
                        className='hover:text-primary transition-all duration-200 relative group'
                      >
                        Support
                        <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mt-16 pt-8 border-t border-gray-800/40 flex flex-col md:flex-row justify-between items-center gap-6'>
              <div className='text-gray-500'>
                © 2025 The Matrix. All rights reserved.
              </div>
              <div className='flex space-x-8 text-gray-500'>
                <a
                  href='#terms'
                  className='hover:text-primary transition-all duration-200 relative group'
                >
                  Terms
                  <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                </a>
                <a
                  href='#privacy'
                  className='hover:text-primary transition-all duration-200 relative group'
                >
                  Privacy
                  <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                </a>
                <a
                  href='#security'
                  className='hover:text-primary transition-all duration-200 relative group'
                >
                  Security
                  <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300'></span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
