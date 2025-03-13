// components/LandingContent.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Github, BookOpen } from "lucide-react";

function XIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  );
}

export function LandingContent() {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    window.location.href = "https://thematrix.app";
  };

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden'>
      {/* Enhanced animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-fade-in' />
      <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-slide' />

      {/* Social Links - Bottom Left */}
      <div className='absolute bottom-6 left-6 z-20'>
        <div className='flex items-center gap-6 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-800/20'>
          <a
            href='https://x.com/thematrixapp'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors'
            aria-label='Twitter'
          >
            <XIcon className='h-4 w-4 text-primary' />
          </a>
          <a
            href='https://t.me/the_matrix_official'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors'
            aria-label='Telegram'
          >
            <MessageCircle className='h-4 w-4 text-primary' />
          </a>
          <a
            href='https://github.com/MatrixTerminal/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors'
            aria-label='GitHub'
          >
            <Github className='h-4 w-4 text-primary' />
          </a>
          <a
            href='/docs'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors'
            aria-label='Documentation'
          >
            <BookOpen className='h-4 w-4 text-primary' />
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

        {/* Content below logo */}
        <div className='flex flex-col items-center space-y-12'>
          {/* Enhanced Description with Glass Card Effect */}
          <div className='text-center space-y-4 max-w-3xl px-8 py-8 rounded-2xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-gray-200/20 dark:border-gray-800/20 shadow-2xl'>
            <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-snug'>
              &apos;Money Markets First&apos; Hyper-gambling Terminal for the
              Elite Financial Madman.
            </h1>
            <div className='space-y-2'>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                AI interface for complex DeFi management across
                <span className='font-semibold text-primary'> 10 L2s </span>&
                <span className='font-semibold text-primary'>
                  {" "}
                  24 Protocols
                </span>
              </p>
              <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                Your Console from Autonomous SocialFi to Contract Deployments.
              </p>
            </div>
          </div>

          {/* Custom Connect Button */}
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className='group relative px-12 py-5 bg-primary/10 text-primary rounded-xl
                     overflow-hidden transition-all duration-300
                     hover:bg-primary/20 hover:scale-105 hover:shadow-lg
                     active:scale-95 dark:bg-primary/20 dark:hover:bg-primary/30
                     border border-primary/20 backdrop-blur-sm cursor-pointer
                     disabled:cursor-not-allowed'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 animate-shine' />
            <span className='text-xl font-bold tracking-wide flex items-center gap-3'>
              {isConnecting ? (
                <>
                  <span className='animate-terminal-blink'>_</span>
                  ACTIVATING THE MATRIX...
                </>
              ) : (
                "Enter The Matrix"
              )}
            </span>
          </button>
        </div>

        {/* Version Number - Bottom */}
        <div className='absolute bottom-6 right-6 md:right-auto px-4 py-2 rounded-full bg-gray-100/10 dark:bg-gray-900/10 backdrop-blur-sm border border-gray-200/10 dark:border-gray-800/10'>
          <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
            v0.1337
          </span>
        </div>
      </div>
    </div>
  );
}

// Enhanced animations
const styles = `
  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-floating {
    animation: floating 6s ease-in-out infinite;
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-shine {
    animation: shine 8s infinite;
  }
  
  @keyframes slide {
    0% { background-position: 0 0; }
    100% { background-position: 20px 20px; }
  }
  .animate-slide {
    animation: slide 3s linear infinite;
  }
  
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 2s ease-out;
  }

  @keyframes terminal-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-terminal-blink {
    animation: terminal-blink 1s step-end infinite;
  }
`;

// Add styles to head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default LandingContent;
