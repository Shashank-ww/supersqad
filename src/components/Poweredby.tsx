import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper' // Removed as we have added that inside the main page div
import Image from 'next/image'
import OpenAI from '@/assets/clientlogos/openai.svg';
import Mediafire from '@/assets/clientlogos/mediafire.svg';
import Yahoo from '@/assets/clientlogos/yahoo.svg';
import CloudPanel from '@/assets/clientlogos/cloudpanel.svg';
import Oreilly from '@/assets/clientlogos/oreilly.svg';
import Criteo from '@/assets/clientlogos/criteo.svg';
import DigitalOcean from '@/assets/clientlogos/digitalocean.svg';


function Poweredby() {
  return (
    <>
    {/* Built With Section */}

      <div className="w-full mx-auto relative items-center justify-center overflow-hidden">
        <h2 className="text-center text-sm font-bold text-secondary-background py-6 text-blue-500">&mdash;&mdash; POWERED BY &mdash;&mdash;</h2>
        <div className="flex justify-center items-center relative pb-4">
          {/* Logos */}
          <div className="flex flex-nowrap items-center space-x-11 p-4 overflow-x-auto animate-slide">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 overflow-hidden animate-slide">  */}
            <Image src={CloudPanel} alt="Logo 7" className="w-32 max-h-24 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            <Image src={Yahoo} alt="Logo 3" className="w-20 max-h-16 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            <Image src={Criteo} alt="Logo 6" className="w-24 max-h-fit transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            <Image src={Mediafire} alt="Logo 2" className="w-36 max-h-fit transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            <Image src={OpenAI} alt="Logo 1" className="w-24 max-h-fit transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            <Image src={DigitalOcean} alt="Logo 9" className="w-24 max-h-fit transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            <Image src={Oreilly} alt="Logo 2" className="w-24 max-h-16 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-105"/>
            {/* Add more logos here */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Poweredby;