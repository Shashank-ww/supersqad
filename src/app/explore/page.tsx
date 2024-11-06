
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Faqs from "@/components/Faqs";

import Sectors from "@/components/Sectors";
import Image from "next/image";
import Work from "@/components/Work";

const Explore = () => {
    return (
        <main className="relative flex flex-col min-h-screen">
<div className="w-full h-400px relative items-center justify-center" style={{ 
            backgroundImage: `url("/webimgs/side4.png")`, 
            backgroundSize: "cover", 
            backgroundPosition: "center 10%",
        }}>
            <div className="relative inset-0 bg-white dark:bg-black opacity-70"></div>
            <MaxWidthWrapper>
            <div className="mx-auto py-20 min-h-[400px] flex flex-col items-left justify-center">
            <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0">
            &#129174; EXPLORE BUSINESS
            </div>
                <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-accent-foreground">
                Tech Enabled Media Marketing
                </h2>
            </div>
        </MaxWidthWrapper>
        </div>

        <MaxWidthWrapper>
      <div className="py-16 sm:py-24 flex flex-col mx-auto items-center justify-center gap-4">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="text-base font-bold leading-7 text-blue-600">EXPLORE OUR WORK</h2>
          <p className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
            Scale media and market like done
          </p>
          <p className="mt-6 text-gray-700">
          Leverage our expertise in media management and technology operations, with unmatched quality content and tailored solutions to meet diverse media execution and marketing needs, driving success and growth for your brand.
          </p>
        </div>
      </div>
  </MaxWidthWrapper>

<MaxWidthWrapper>
      <div id="core" className="py-24 sm:py-16 flex flex-col mx-auto items-center justify-center gap-4">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-base font-bold leading-7 text-blue-600">EXPLORE OUR WORK</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scale marketing and technology like done
          </p>
          <p className="mt-6 text-gray-700 max-w-screen-sm mx-auto">
          Leverage our expertise in media management and technology operations, with unmatched quality content and tailored solutions to meet diverse media execution and marketing needs, driving success and growth for your brand.
          </p>
        </div>
      </div>
  </MaxWidthWrapper>

<Work/>

<MaxWidthWrapper>
<div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world&apos;s most innovative teams around the world
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-fit sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-110"
            src="/webimgs/teamlogos/David.svg"
            alt="DavidProd"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-110"
            src="/webimgs/teamlogos/Vemedya.svg"
            alt="Vemedya"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-110"
            src="/webimgs/teamlogos/Godrej.svg"
            alt="Godrej"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-110"
            src="/webimgs/teamlogos/MaxIndia.svg"
            alt="MaxIndia"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 transition-transform transform grayscale duration-600 hover:grayscale-0 hover:scale-110"
            src="/webimgs/teamlogos/lg-logo.svg"
            alt="LG Logo"
            width={60}
            height={24}
          />
        </div>
      </div>
    </div>
</MaxWidthWrapper>

{/* Popular Explore services, 3 sections divs */}

<MaxWidthWrapper>
      <div id="process" className='max-w-screen py-24 sm:py-16 cursor-default'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col text-center justify-center md:text-right md:pr-8'>
      <h1 className='mt-2 text-3xl items-right justify-end font-bold tracking-tight text-gray-900 sm:text-4xl py-6'>
        Global Outsourcing
        </h1>
      <p className="text-md font-light">
      We are driven by the desire to uplift everyone we touch. Empathy and Agility are the key pillars, enabling us to adapt quickly in response to changing market dynamics but doing so in the most humane way possible whilst leveraging the power of emerging technologies.
        </p>
        <div className='flex justify-center md:justify-end'>      
      <button className='bg-blue-500 w-[200px] text-white hover:bg-slate-600 font-medium my-12 md:mx-0 py-3'>
        View Work
        </button>
        </div>
    </div>
        <div className='w-full md:w-[500px] mx-auto my-4 md:grid-cols-2 space-y-2'>
          {/* Large image on right */}
          <div 
            className="w-full h-80 md:h-full"
            style={{ 
            backgroundImage: `url(/webimgs/explore/process.png)`, 
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center' 
            }}>
            </div>
        </div>      
  </div>
</div>
</MaxWidthWrapper>

<MaxWidthWrapper>
      <div id="offshore" className='max-w-screen py-24 sm:py-16 cursor-default'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='w-full md:w-[500px] mx-auto my-4 md:grid-cols-2 space-y-2'>
          {/* Large image on left */}
          <div 
            className="w-full h-80 md:h-full"
            style={{ 
            backgroundImage: `url(/webimgs/explore/offshore.png)`, 
            backgroundSize: 'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition: 'center' 
            }}>
            </div>
            </div>

      <div className='flex flex-col justify-center text-center md:text-left md:pl-8'>
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-6'>
        Sub-Contract Studio
        </h1>
      <p className="text-md font-light">
      Leverage our expertise with dedicated resources dedicated to streamline operations and achieve business goals faster. <br/> <br/> Register now to access our dedicated resources and take your projects to the next level with unmatched proficiency and dedication.
        </p>      
      <button className='bg-blue-500 w-[200px] text-white hover:bg-slate-600 font-medium my-12 mx-auto md:mx-0 py-3'>Get Started</button>
    </div>
  </div>
</div>
</MaxWidthWrapper>

<MaxWidthWrapper>
  <div id="consult" className='max-w-screen py-12 cursor-default'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col text-center justify-center md:text-right md:pr-8'>
        <h1 className='mt-2 text-3xl items-right justify-end font-bold tracking-tight text-gray-900 sm:text-4xl py-6'>
          Business Consulting
        </h1>
        <p className="text-md font-light">
          Accelerate your business success with expert consultants providing strategies and insights to drive growth and optimize business performance. Get access to cutting-edge solutions designed to elevate your business to new heights. <br/> <br/> Register now to tap into our expertise and unlock your full potential with our comprehensive growth consultation services.
        </p>
        <div className='flex justify-center md:justify-end'>
          <button className='bg-blue-500 w-[200px] text-white hover:bg-slate-600 font-medium my-12 py-3'>
            Register Now
          </button>
        </div>
      </div>
      <div className='w-full md:w-[500px] mx-auto my-4 md:grid-cols-2 space-y-2'>
        {/* Large image on right */}
        <div 
          className="w-full h-80 md:h-full"
          style={{ 
            backgroundImage: `url(/webimgs/explore/consulting.png)`, 
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center' 
          }}>
        </div>
      </div>
    </div>
  </div>
</MaxWidthWrapper>

{/*  close div carried from 3-section divs */}


<Sectors/>

<Faqs/>
 
        </main>
    );
};

export default Explore;
