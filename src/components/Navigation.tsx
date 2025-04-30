import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigationProps {
  onConnect: () => void;
}

export default function Navigation({ onConnect }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='fixed top-4 z-navbar w-full lg:top-6 z-50'>
      <div className='container box-border !max-w-[1672px] !px-6 md:!px-9 mx-auto'>
        <div
          className={`relative flex h-[var(--navbar-height)] bg-black w-full items-center justify-between rounded-lg border border-transparent px-2 py-1.5 transition-[box-shadow_background-color_border-color] duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem] ${
            isScrolled
              ? "shadow-[0px_5px_18px_rgba(204,_204,_204,_0.2)] dark:border-brand-neutrals-900 dark:bg-brand-white dark:shadow-[0px_5px_18px_rgba(204,_204,_204,_0.1)]"
              : ""
          }`}
        >
          <Link
            href='/'
            className='relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3'
          >
            <div className='flex items-center gap-2'>
              <Image
                src='/logo.png'
                alt='Matrix Logo'
                width={100}
                height={24}
                className='invert'
              />
            </div>
          </Link>

          <ul className='col-start-2 gap-5 px-2 font-mono font-semibold uppercase -tracking-2 text-brand-neutrals-700 dark:text-brand-neutrals-200 xl:gap-11 hidden lg:flex justify-center'>
            <li>
              <Link
                href='#pricing'
                className='text-gray-400 hover:text-white font-mono uppercase text-sm'
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href='#features'
                className='text-gray-400 hover:text-white font-mono uppercase text-sm'
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href='#infrastructure'
                className='text-gray-400 hover:text-white font-mono uppercase text-sm'
              >
                Infrastructure
              </Link>
            </li>
            <li>
              <Link
                href='#trader'
                className='text-gray-400 hover:text-white font-mono uppercase text-sm'
              >
                Trader
              </Link>
            </li>
          </ul>

          <div className='col-start-3 hidden w-full justify-end gap-2 lg:flex'>
            <button
              onClick={onConnect}
              className='bg-white border border-white/30 hover:border-white/50 text-black font-mono font-semibold uppercase text-sm px-4 py-2 rounded-lg'
            >
              Launch App
            </button>
          </div>

          <div className='contents'>
            <button
              className='relative size-6 lg:hidden'
              aria-expanded='false'
              aria-controls='mobile-menu'
              aria-label='Menu'
            >
              <svg
                className='styles_hamburger__F4zzS -ml-2 -mt-2 size-10'
                viewBox='0 0 100 100'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
                strokeWidth='5.5'
                fill='none'
                stroke='currentColor'
              >
                <path
                  className='styles_line__D4vEx styles_top__K0nNB'
                  d='m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20'
                ></path>
                <path className='styles_line__D4vEx' d='m 70,50 h -40'></path>
                <path
                  className='styles_line__D4vEx styles_bottom__4yuSE'
                  d='m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
