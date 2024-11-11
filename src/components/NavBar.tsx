"use client"

import Link from "next/link";
import { use, useEffect, useState, useTransition } from "react"
import { BsFillMenuButtonWideFill, BsMenuButtonWide, BsMenuButtonWideFill } from "react-icons/bs";
import { NavMenu } from "@/components/NavMenu";
import { LoginButton } from "./auth/login-button";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";

const NavBar = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLoginClick = () => {
        startTransition(() => {
          // Simulate an async login action (e.g., network request)
          console.log("Logging in...");
        });
      };
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        // console.log('isScrolled:', window.scrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isPending, startTransition] = useTransition();

        return (
            <nav className={`navbar fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled backdrop-blur-lg bg-accent-dark/80 shadow-md' : 'bg-transparent'}`}>
            <div className="navbar-content flex justify-between items-center h-16 mx-auto p-4">
                <div className="logo flex items-center space-x-2">
                <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <div className="HeaderLogo">
                      {/* <Image 
                      className="object-contain"
                      layout="intrinsic"
                      src="sqlogo-wo.svg"
                      alt="Supasqad Header Logo"
                      width={140}
                      height={60}
                      /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="48" height="48">
                      <polygon points="402.65 269 312.65 269 327.96 197 237.96 197 222.65 269 207.35 341 297.35 341 282.04 413 372.04 413 387.35 341 402.65 269" fill="#06f"/>
                      <polygon points="433.26 125 343.26 125 253.26 125 163.26 125 147.96 197 132.65 269 117.35 341 102.04 413 86.74 485 176.74 485 266.74 485 356.74 485 372.04 413 282.04 413 297.35 341 207.35 341 222.65 269 237.96 197 327.96 197 312.65 269 402.65 269 387.35 341 372.04 413 462.04 413 477.35 341 492.65 269 507.96 197 523.26 125 433.26 125" fill="#06f"/>
                      <polyline points="372.04 413 387.35 341 402.65 269 312.65 269 327.96 197 237.96 197 222.65 269 207.35 341 297.35 341 282.04 413 372.04 413" fill="#fff"/>
                      <polygon points="372.04 413 462.04 413 446.74 485 356.74 485 372.04 413" fill="none"/>
                    </svg>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                              <defs>
                                <linearGradient id="a" x1="575.59" y1="176.5" x2="24.69" y2="425.84" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stopColor="aqua"/>
                                  <stop offset="1" stopColor="#0071bc"/>
                                </linearGradient>
                                <linearGradient id="b" x1="379.52" y1="264.01" x2="220.48" y2="335.99" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stopColor="aqua"/>
                                  <stop offset="1" stopColor="#0071bc"/>
                                </linearGradient>
                              </defs>
                              <path d="M24.46,298.22C21,86.48,78.27,22.8,299.55,23.83S576.38,74.33,575.68,300,531.26,573.31,299.55,576.08,27.93,523.85,24.46,298.22Z" fill="url(#a)"/>
                              <path d="M310.09,275.26h74.52l79.91-86.12a5.06,5.06,0,0,0-3.71-8.49H263.5a5.07,5.07,0,0,0-3.71,1.62l-124.31,134a5.06,5.06,0,0,0,3.71,8.49h76.2l94.7-102.07Z" fill="#fff"/>
                              <path d="M289.91,377.33V324.74H215.39l-79.91,86.12a5.06,5.06,0,0,0,3.71,8.49H336.5a5.07,5.07,0,0,0,3.71-1.62l124.31-134a5.06,5.06,0,0,0-3.71-8.49h-76.2Z" fill="#fff"/>
                              <polygon points="289.91 377.33 384.61 275.26 310.09 275.26 310.09 222.67 215.39 324.74 289.91 324.74 289.91 377.33" fill="url(#b)"/>
                            </svg> */}

                        </div>
                        <div className='font-black text-lg tracking-tight cursor-pointer text-transparent bg-gradient-to-l from-zinc-700 to-slate-800 bg-clip-text transition ease-in-out duration-300 hover:from-blue-500 hover:to-sky-600'>
                            <i className="pr-2">SUPASQAD.COM</i> 
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="menu-bar flex items-center">
                    {/* Desktop Menu - Visible only on larger screens */}
                    <div className="desktop-menu hidden md:flex items-center space-x-4">
                    <NavMenu />
                    <LoginButton>
                        <Button
                            onClick={handleLoginClick}
                            disabled={isPending}
                            type="submit"
                            className="menu-button bg-sky-500 text-white px-4 py-2 font-semibold text-sm">
                            {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                            Login
                        </Button>
                    </LoginButton>
                    </div>

                    {/* Mobile Menu Button - Visible only on smaller screens */}
                    <div className="md:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <BsFillMenuButtonWideFill size={24} /> : <BsMenuButtonWide size={24} />}
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu md:hidden flex items-center">
                <NavMenu/>
                </div>
            )}
        </nav>
        )};

        export default NavBar;