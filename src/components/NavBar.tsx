"use client"

import Link from "next/link";
import { use, useEffect, useState, useTransition } from "react"
import { BsFillMenuButtonWideFill, BsMenuButtonWide, BsMenuButtonWideFill } from "react-icons/bs";
import { NavMenu } from "@/components/NavMenu";
import { LoginButton } from "./auth/login-button";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

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
            <nav className={`navbar fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled backdrop-blur-lg bg-accent/80 shadow-md' : 'bg-transparent'}`}>
            <div className="navbar-content flex justify-between items-center h-16 mx-auto p-4">
                <div className="logo flex items-center space-x-2">
                <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <div className="h-9 w-9">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
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
                            </svg>

                        </div>
                        <div className='font-bold text-lg cursor-pointer bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent hover:from-sky-500 hover:to-blue-500 transition duration-600'>
                            Supersqad<span className='font-normal'>studios</span>
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
                            className="menu-button bg-sky-500 text-white px-4 py-2 rounded-md font-semibold text-sm">
                            {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                            Login
                        </Button>
                    </LoginButton>
                    </div>

                    {/* Mobile Menu Button - Visible only on smaller screens */}
                    <div className="md:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <BsFillMenuButtonWideFill size={24} />  : <BsMenuButtonWide size={24} />}
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