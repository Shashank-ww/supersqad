import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

const logos = [
  { src: '/webimgs/teamlogos/Godrej.svg', alt: 'Godrej', width: 100, height: 60 },
  { src: '/webimgs/teamlogos/Bostons.svg', alt: 'Bostons', width: 160, height: 60 },
  { src: '/webimgs/teamlogos/epilepsy-foundation.svg', alt: 'Efoundation', width: 100, height: 90 },
  { src: '/webimgs/teamlogos/Oxfam.svg', alt: 'Oxfam', width: 120, height: 60 },
  { src: '/webimgs/teamlogos/MaxIndia.svg', alt: 'Max', width: 160, height: 80 },
  { src: '/webimgs/teamlogos/giz.svg', alt: 'GIZ', width: 160, height: 60 },
  { src: '/webimgs/teamlogos/Greenpeace.svg', alt: 'Greenpeace', width: 160, height: 80 },
  { src: '/webimgs/teamlogos/Omron.svg', alt: 'Omron', width: 110, height: 55 },
]

function Brands() {
  return (
    <MaxWidthWrapper>
      <div className='w-full bg-secondary-background py-24 sm:py-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='lg:sticky top-24 self-start flex flex-col items-center justify-start md:pr-8'>
            <div className="max-w-md items-center justify-end">
              <p className='text-blue-500 font-bold'>Top Clienteles</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pb-6 tracking-tight'>Premiere agency of choice</h1>
              <p>We craft imaginative strategies and develop marketing products that yield measurable results, empowering your brand to thrive and excel in the dynamic landscape of tomorrow.
              </p>
            </div>
          </div>
          <div className='lg:w-[500px] md:w-[auto] h-[auto] bg-zinc-100 shadow-lg rounded-md bg-cover bg-center mx-auto my-4'>
            <div className='text-primary-background m-4 px-4'>
              <div className="w-full grid grid-cols-2 gap-y-4 items-center mx-auto">
                {logos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center h-28 w-full">
                    <Image
                      className="object-contain grayscale transition-transform duration-600 hover:grayscale-0 hover:scale-105"
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}  
                      height={logo.height}  
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Brands
