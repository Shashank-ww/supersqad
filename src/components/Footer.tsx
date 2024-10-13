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
    <div className="max-w-screen bg-stone-100 shadow-inner">
    <MaxWidthWrapper>
    <div className='max-w-[1240px] mx-auto items-start justify-start px-4 py-16 grid lg:grid-cols-3 gap-8'>
        <div> 
            <h1 className='w-full text-3xl font-bold text-inherit cursor-default hover:text-blue-500'>Supersqad<span className='font-normal'>studios</span></h1>
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
<div className='flex items-center justify-center mx-auto text-center border-t border-1 border-gray-700 text-muted-foreground'> 
    <ul className='mx-auto hidden lg:flex lg:items-center py-2 text-xs'>
        <li className='p-1'>Terms of Service</li>  
        <li className='p-1'>GDPR</li>
        <li className='p-1'>Cookie Settings</li>
    </ul>
    <p className='py-4 px-2 mx-auto text-xs text-muted-foreground'>
        <span>&copy; 2024 - 2026 Supersqad.com&#8482;</span> {'\n'} All Rights Reserved. 
        Developed by Werbex Inc.
    </p>
</div>
</MaxWidthWrapper>
</div>
</>
  );
};

export default Footer;