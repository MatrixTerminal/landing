"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import MatrixBackground from "@/components/MatrixBackground";
import { CSSProperties } from "react";
import Navigation from "@/components/Navigation";

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
      className={`${geistSans.variable} ${geistMono.className} min-h-screen bg-black text-white flex flex-col items-center justify-center`}
    >
      <Navigation onConnect={handleConnect} />

      {/* Cursor for Hyperliquid Section */}
      <section className='w-full container-full h-svh min-h-[40rem] md:max-h-[min(80rem,300vw)] md:min-h-[48rem] px-4 pb-4 pt-[calc(var(--navbar-height)+32px)] text-brand-white dark:text-brand-black md:px-6 md:pb-6 lg:pt-[calc(var(--navbar-height)+48px)] mb-18 md:mb-28 relative overflow-hidden'>
        <div className='relative z-20 flex flex-col justify-start mx-auto gap-6 pt-12 h-full max-w-[1808px] text-center md:justify-between md:gap-12 md:px-6 md:pt-20'>
          <div className='absolute inset-0 z-[-1]'>
            <canvas ref={canvasRef} className='w-full h-full rounded-3xl' />
          </div>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center'>
            Cursor for Hyperliquid
          </h1>
          <p className='text-xl text-white font-mono text-center'>
            Your AI-powered co-pilot for perps trading, from strategic intel to
            personalized risk management.
          </p>

          <div className='flex gap-4 justify-center'>
            <button
              onClick={handleConnect}
              className='group relative rounded-xl p-1 -outline-offset-2 border-2 border-white/30 flex flex-col cursor-pointer hover:border-white/50 transition-all duration-300'
            >
              <div
                className='glowing pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={
                  {
                    "--blur": "2px",
                    "--spread": "64",
                    "--active": "1",
                  } as CSSProperties
                }
              >
                <div className='style_glow__i4Qpo'></div>
              </div>
              <span className='relative inline-flex w-full flex-1 items-center justify-center gap-4.5 whitespace-nowrap rounded-lg uppercase shadow-[0px_4px_10px_rgba(0,0,0,0.35)] transition-colors motion-reduce:transition-none md:gap-6 px-3.5 py-[15px] font-mono text-sm/[1rem] font-semibold md:px-4 md:py-4.5 md:text-base/[1.3125rem] md:tracking-2 bg-black text-white dark:bg-white dark:text-black'>
                START TRADING
              </span>
            </button>
            <Link
              href='#pricing'
              className='group relative rounded-xl p-1 -outline-offset-2 border-2 border-white/30 flex flex-col cursor-pointer hover:border-white/50 transition-all duration-300'
            >
              <div
                className='glowing pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={
                  {
                    "--blur": "2px",
                    "--spread": "64",
                    "--active": "1",
                  } as CSSProperties
                }
              >
                <div className='style_glow__i4Qpo'></div>
              </div>
              <span className='relative inline-flex w-full flex-1 items-center justify-center gap-4.5 whitespace-nowrap rounded-lg uppercase shadow-[0px_4px_10px_rgba(0,0,0,0.35)] transition-colors motion-reduce:transition-none md:gap-6 px-3.5 py-[15px] font-mono text-sm/[1rem] font-semibold md:px-4 md:py-4.5 md:text-base/[1.3125rem] md:tracking-2 bg-black text-white'>
                PRICING
              </span>
            </Link>
          </div>
          <div className='w-full overflow-hidden'>
            <div className='w-full h-96 md:h-[670px] relative'>
              <Image
                src='/images/screenshots/main.png'
                alt='Hyperliquid Matrix screenshot'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className='container flex flex-col gap-4 text-neutral-800 dark:text-neutral-400 md:gap-3 mb-16 md:mb-24'>
        <p className='font-mono text-sm/[0.875rem] tracking-4 md:text-sm/[1.25rem] text-center uppercase text-neutral-400'>
          Trusted by engineers at
        </p>
        <div className='grid grid-cols-2 justify-items-center gap-x-8 gap-y-6 px-4 py-4 md:flex md:flex-wrap md:justify-center md:gap-x-16 md:gap-y-11 md:py-9 lg:gap-x-[5.625rem] lg:px-12'>
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className='w-24 h-16 flex items-center justify-center'
            >
              <Image
                src={`/images/company-logo-${index + 1}.svg`}
                alt={`Company ${index + 1}`}
                width={48}
                height={48}
                className='w-auto h-12'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Hyperliquid Section */}
      <section className='container py-16 flex flex-col items-center text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>
          Built for Hyperliquid
        </h2>
        <p className='text-xl text-gray-200 mb-12 font-mono'>
          Get answers from your positions or refer to trading concepts or
          strategies. Use the model&apos;s experience in one click.
        </p>
        {/* <div className='w-full overflow-hidden'>
            <div className='w-full h-96 md:h-[670px] relative'>
              <Image
                src='/images/screenshots/hyper.png'
                alt='Hyperliquid Matrix screenshot'
                fill
                className='object-contain'
              />
            </div>
          </div> */}
      </section>

      {/* Trading Section */}
      <section className='container py-16 flex flex-col items-center text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>
          10x your trading
        </h2>
        <p className='text-xl text-gray-200 mb-12 font-mono'>
          Matrix lets you breeze through the market by predicting your next
          trade.
        </p>
        <MatrixBackground
          imageUrl='/images/screenshots/10x.png'
          imageAlt='10x your trading screenshot'
          className='h-[670px]'
        />
      </section>

      {/* Hero Section */}
      <section className='container py-16 flex flex-col items-center text-center'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>
          Trade in natural language
        </h1>
        <p className='text-xl text-gray-200 mb-12 font-mono'>
          Matrix lets you trade using instructions. Manage your Trades and
          Portfolio with a simple prompt.
        </p>
        <MatrixBackground
          imageUrl='/images/screenshots/trade.png'
          imageAlt='Trade in natural language screenshot'
          className='w-full h-[670px]'
        />
      </section>

      {/* Features Section */}
      <section className='container py-16'>
        <div className='mx-auto text-left'>
          <div className='flex flex-col md:flex-row justify-between mb-12'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>
                Smarter, Safer, More Profitable Trading
              </h2>
              <p className='text-xl text-gray-200 font-mono'>
                Intelligent, fast & familiar, Matrix is the best way to trade
                perps with AI.
              </p>
            </div>
            <div className='flex items-end mt-6 md:mt-0'>
              <button className='bg-white text-black font-mono font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg'>
                See more features
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Feature Card 1 */}
            <div className='bg-neutral-900 border border-gray-800 rounded-2xl p-6'>
              <h3 className='text-2xl font-bold text-white mb-3'>
                Frontier Intelligence
              </h3>
              <p className='text-gray-400 font-mono'>
                Powered by a mix of purpose-built and frontier models, Matrix is
                smart and fast.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className='bg-neutral-900 border border-gray-800 rounded-2xl p-6'>
              <h3 className='text-2xl font-bold text-white mb-3'>
                Feels Familiar
              </h3>
              <p className='text-gray-400 font-mono'>
                Import all your indicators, assets and positions in one click.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className='bg-neutral-900 border border-gray-800 rounded-2xl p-6'>
              <h3 className='text-2xl font-bold text-white mb-3'>
                Safety Options
              </h3>
              <p className='text-gray-400 font-mono'>
                If you enable Safe Mode, your positions never exceed 5%. All
                your trades are non custodial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Section */}
      <section className='container py-16'>
        <div className='bg-neutral-900 border border-gray-800 rounded-3xl p-8 max-w-5xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex-1'>
              <div className='bg-neutral-800 inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-4'>
                <Image
                  src='/images/telegram-icon.svg'
                  alt='Telegram'
                  width={20}
                  height={20}
                />
                <span className='text-gray-400 font-mono uppercase text-xs tracking-wider'>
                  Telegram
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Iterating with our Alpha Community
              </h3>
              <p className='text-gray-400 font-mono mb-6'>
                Join the Hyperliquid Trader&apos;s community channel with alpha
                strategies and trading tips to iterate continuously on your
                Trading skills.
              </p>
              <button className='bg-gradient-to-r from-white to-gray-300 text-black font-mono font-bold uppercase text-sm px-6 py-3 rounded-md'>
                Join Now
              </button>
            </div>
            <div className='flex-1'>
              <div className='aspect-video bg-neutral-800 rounded-xl'></div>
              <div className='mt-4'>
                <p className='text-gray-300 font-mono'>Matrix Trading</p>
                <p className='text-gray-500 font-mono text-sm'>1900 members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='container container py-16 flex flex-col items-center text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>
          Loved by world-class traders
        </h2>
        <p className='text-xl text-gray-200 mb-12 font-mono'>
          Traders in web3 reach for Matrix by choice.
        </p>
      </section>

      {/* CTA Section */}
      <section className='container py-16 flex justify-center'>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <button
            onClick={handleConnect}
            className='bg-black border border-white/30 hover:border-white/50 text-white font-mono uppercase text-sm px-8 py-4 rounded-lg shadow-lg'
          >
            START TRADING
          </button>
          <Link
            href='#pricing'
            className='bg-white text-black font-mono uppercase text-sm px-8 py-4 rounded-lg shadow-lg'
          >
            PRICING
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='container mx-auto py-16 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
          <div>
            <a
              href='mailto:hi@matrix.com'
              className='text-gray-400 hover:text-white flex items-center gap-2 mb-8'
            >
              hi@matrix.com
            </a>
            <div className='flex flex-col gap-4'>
              <div className='bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-md'>
                <span className='text-gray-500 font-mono text-sm tracking-wider uppercase'>
                  SOC 2 Certified
                </span>
              </div>
              <p className='text-gray-500 font-mono'>
                Made by{" "}
                <a href='#' className='hover:text-white'>
                  The Matrix
                </a>
              </p>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-8'>
            <div className='flex flex-col gap-4'>
              <Link href='#pricing' className='text-gray-500 hover:text-white'>
                Pricing
              </Link>
              <Link
                href='#downloads'
                className='text-gray-500 hover:text-white'
              >
                Downloads
              </Link>
              <Link href='#docs' className='text-gray-500 hover:text-white'>
                Docs
              </Link>
              <Link href='#forum' className='text-gray-500 hover:text-white'>
                Forum
              </Link>
            </div>
            <div className='flex flex-col gap-4'>
              <Link href='#careers' className='text-gray-500 hover:text-white'>
                Careers
              </Link>
              <Link href='#company' className='text-gray-500 hover:text-white'>
                Company
              </Link>
              <Link href='#security' className='text-gray-500 hover:text-white'>
                Security
              </Link>
              <Link href='#privacy' className='text-gray-500 hover:text-white'>
                Privacy
              </Link>
            </div>
            <div className='flex flex-col gap-4'>
              <Link href='#terms' className='text-gray-500 hover:text-white'>
                Terms
              </Link>
              <Link
                href='#changelog'
                className='text-gray-500 hover:text-white'
              >
                Changelog
              </Link>
              <Link
                href='https://github.com'
                className='text-gray-500 hover:text-white'
              >
                GitHub
              </Link>
              <Link
                href='https://twitter.com'
                className='text-gray-500 hover:text-white'
              >
                Twitter
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 border border-gray-800 rounded-lg p-2'>
              <span className='text-gray-500'>English</span>
            </div>
            <div className='flex items-center gap-4 border border-gray-800 rounded-lg p-2'>
              <button className='text-gray-600'>
                <Github size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
