import React from 'react'
import {
    SlSocialSkype,
    SlSocialGoogle,
    SlSocialInstagram,
    SlSocialLinkedin,
    SlSocialYoutube
} from 'react-icons/sl'
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className="bg-stone-100 shadow-inner">
    <MaxWidthWrapper>
    <div className='max-w-[1240px] mx-auto items-start justify-start px-4 py-16 grid lg:grid-cols-3 gap-8'>
        <div> 
            <div>
            <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <div className="FooterLogo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="48" height="48">
                            <polygon points="402.65 269 312.65 269 327.96 197 237.96 197 222.65 269 207.35 341 297.35 341 282.04 413 372.04 413 387.35 341 402.65 269" fill="#06f"/>
                            <polygon points="433.26 125 343.26 125 253.26 125 163.26 125 147.96 197 132.65 269 117.35 341 102.04 413 86.74 485 176.74 485 266.74 485 356.74 485 372.04 413 282.04 413 297.35 341 207.35 341 222.65 269 237.96 197 327.96 197 312.65 269 402.65 269 387.35 341 372.04 413 462.04 413 477.35 341 492.65 269 507.96 197 523.26 125 433.26 125" fill="#06f"/>
                            <polyline points="372.04 413 387.35 341 402.65 269 312.65 269 327.96 197 237.96 197 222.65 269 207.35 341 297.35 341 282.04 413 372.04 413" fill="#fff"/>
                            <polygon points="372.04 413 462.04 413 446.74 485 356.74 485 372.04 413" fill="none"/>
                            </svg>
                        </div>
                        <div className='font-black text-lg tracking-tight cursor-pointer text-transparent bg-gradient-to-l from-zinc-700 to-slate-800 bg-clip-text transition ease-in-out duration-300 hover:from-blue-500 hover:to-sky-600'>
                            <i className="pr-2">SUPASQAD.COM</i> 
                        </div>
                    </div>
                </Link>
            </div>
            
            <p className='py-4 w-[80%] text-xs'>
            Outsource effortless media management and tech ops with our talented and ready to work resources.
            </p>
           <div className='flex justify-start py-4 gap-4 md:w[50% my-4]'>
                <SlSocialGoogle size={20} />
                <SlSocialInstagram size={20} />
                <SlSocialLinkedin size={20} />
                <SlSocialYoutube size={20} />
                <SlSocialSkype size={20} />
            </div>
            <div className='text-slate-300 hidden lg:block mt-4'>
                Technical Info:
          <p className='text-xs'>pre-build:4.2 rv7.7</p>
          <p className='text-xs'>v7.79 w.d:42.6</p>
          </div>
        </div>
        <div className='flex lg:grid-cols-2 gap-8 justify-items-center'>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Company</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs block hover:underline'>
                <Link href="./about">About us</Link>
                </li>
                <li className='py-2 text-xs hover:underline'>
                    <Link href="/talent">Top Talent</Link>
                    </li>
                <li className='py-2 text-xs hover:underline'>
                    <a href={"./#services"}>Services</a></li>
                <li className='py-2 text-xs'>Resources</li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Clients</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs'>Get Consultation</li>
                <li className='py-2 text-xs'>Hire Contractor</li>
                <li className='py-2 text-xs'>Buy Services</li>
                <li className='py-2 text-xs'>Enterprise</li>
            </ul>
        </div>
        </div>

        <div className='flex lg:grid-cols-2 space-x-8 justify-stretch'>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Resources</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs block hover:underline'>
                <Link href="./blog">Blogs</Link>
                </li>
                <li className='py-2 text-xs'>Learning</li>
                <li className='py-2 text-xs'>Partnerships</li>
                <li className='py-2 text-xs'>Media Centre</li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Support</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs'>Raise Issue</li>
                <li className='py-2 text-xs'>Contact</li>
                <li className='py-2 text-xs'>Community</li>
                <li className='py-2 text-xs'>Career</li>
                </ul>
        </div>
        </div>
</div>
</MaxWidthWrapper>
<div className='flex items-center justify-center text-center border-t border-gray-600 text-muted-foreground'> 
    <ul className='mx-auto hidden lg:flex lg:items-center py-2 text-xs'>
        <li className='p-1'>Terms of Service</li>  
        <li className='p-1'>GDPR</li>
        <li className='p-1'>Cookie Settings</li>
    </ul>
    <p className='py-4 px-2 mx-auto text-xs text-muted-foreground'>
        <span>&copy; 2024 - 2025 Supersqad.com&#8482;</span> {'\n'} All Rights Reserved. 
        Developed by Werbex Inc.
    </p>
</div>
</div>
</>
  );
};

export default Footer;