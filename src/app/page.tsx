"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, Github, BookOpen } from "lucide-react";
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
    window.location.href = "https://enter.thematrix.app";
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
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

    const interval = setInterval(draw, 35);

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
      <div className='relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden'>
        {/* Matrix animation canvas as background */}
        <canvas
          ref={canvasRef}
          className='absolute inset-0 z-0'
          style={{ display: "block" }}
        />

        {/* Social Links - Bottom Left */}
        <div className='absolute bottom-6 left-6 z-20'>
          <div className='flex items-center gap-6 px-4 py-2 rounded-full backdrop-blur-sm bg-black/50 border border-gray-800/20 transition-all duration-300 hover:bg-black/60 hover:border-primary/20 hover:shadow-[0_0_15px_rgba(71,216,163,0.15)]'>
            <a
              href='https://x.com/thematrixapp'
              target='_blank'
              rel='noopener noreferrer'
              className='relative group'
              aria-label='Twitter'
            >
              <XIcon className='h-4 w-4 text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110' />
              <span className='absolute -bottom-1 left-1/2 w-0 h-px bg-primary transform -translate-x-1/2 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a
              href='https://t.me/the_matrix_official'
              target='_blank'
              rel='noopener noreferrer'
              className='relative group'
              aria-label='Telegram'
            >
              <MessageCircle className='h-4 w-4 text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110' />
              <span className='absolute -bottom-1 left-1/2 w-0 h-px bg-primary transform -translate-x-1/2 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a
              href='https://github.com/MatrixTerminal/'
              target='_blank'
              rel='noopener noreferrer'
              className='relative group'
              aria-label='GitHub'
            >
              <Github className='h-4 w-4 text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110' />
              <span className='absolute -bottom-1 left-1/2 w-0 h-px bg-primary transform -translate-x-1/2 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a
              href='/docs'
              target='_blank'
              rel='noopener noreferrer'
              className='relative group'
              aria-label='Documentation'
            >
              <BookOpen className='h-4 w-4 text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110' />
              <span className='absolute -bottom-1 left-1/2 w-0 h-px bg-primary transform -translate-x-1/2 transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>
        </div>

        {/* Main content container with proper spacing */}
        <div className='relative z-10 flex flex-col items-center justify-center w-full min-h-screen'>
          {/* Logo Container */}
          <div className='relative w-full h-96'>
            <Image
              src='/logo_with_outline.png'
              alt='Matrix Logo'
              fill
              style={{ objectFit: "contain" }}
              priority
              className='filter drop-shadow-2xl animate-floating'
            />
          </div>

          {/* Content below logo - ENHANCED WITH PREMIUM GLASS EFFECT */}
          <div className='flex flex-col items-center space-y-12'>
            {/* Enhanced Premium Glass Card Effect - More See-Through */}
            <div
              className='text-center space-y-4 max-w-3xl px-10 py-10 rounded-3xl mb-4 mt-[-40px]
           backdrop-blur-sm bg-gradient-to-br from-black/10 to-black/5
           border border-primary/10 shadow-[0_0_25px_rgba(71,216,163,0.15)]
           relative overflow-hidden group transition duration-300 hover:shadow-[0_0_35px_rgba(71,216,163,0.25)]'
            >
              {/* Subtle glow effects */}
              <div className='absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-xl opacity-20 group-hover:opacity-30 transition duration-500'></div>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-15 group-hover:opacity-25 animate-pulse'></div>

              {/* Glass card shine effect */}
              <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
              <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent'></div>

              <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-snug relative z-10'>
                &apos;Money Markets First&apos; Hyper-gambling Terminal for the
                Elite Financial Madman.
              </h1>
              <div className='space-y-3 relative z-10'>
                <p className='text-sm md:text-base text-gray-200 leading-relaxed'>
                  AI interface for complex DeFi management across
                  <span className='font-semibold text-primary'> 10 L2s </span>&
                  <span className='font-semibold text-primary'>
                    {" "}
                    24 Protocols
                  </span>
                </p>
                <p className='text-sm md:text-base text-gray-300 leading-relaxed'>
                  Your Console from Autonomous SocialFi to Contract Deployments.
                </p>
              </div>
            </div>

            {/* Custom Connect Button - Enhanced */}
            <button
              onClick={handleConnect}
              className='group relative px-16 py-5 bg-primary/20 text-primary rounded-xl
                       overflow-hidden transition-all duration-300
                       hover:bg-primary/30 hover:scale-105 hover:shadow-lg
                       active:scale-95 
                       border border-primary/30 backdrop-blur-lg cursor-pointer
                       shadow-[0_0_15px_rgba(71,216,163,0.15)]
                       disabled:cursor-not-allowed'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 animate-shine' />
              <span className='text-xl font-bold tracking-wide flex items-center gap-3'>
                Enter The Matrix
              </span>
            </button>
          </div>

          {/* Version Number - Bottom */}
          <div className='absolute bottom-6 right-6 md:right-auto px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-gray-800/20 shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
            <span className='text-sm font-medium text-gray-400'>v0.1337</span>
          </div>
        </div>
      </div>
    </div>
  );
}
