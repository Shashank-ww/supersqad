import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import heroImages from "@/assets/heroimages"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

import Callaction from "@/components/Callaction"
import Testimonials from "@/components/testimonials";
import UnderDev from "@/components/UnderDev";
import Sectors from "@/components/Sectors";
import Workwithus from "@/components/Workwithus";
import Brands from "@/components/Brands";
import FloatingBlock from "@/components/FloatingBlock";
import Poweredby from "@/components/Poweredby";
import Tabs from "@/components/Tabs";

export default function Home() {

  const currentImageIndex = Math.floor(Math.random() * heroImages.length);
  const images = [...heroImages];

  return (
    <main>

    <div className="relative h-[100vh] flex items-center justify-end bg-gradient-to-tr from-white via-blue-50 to-sky-100">

    {images && images[currentImageIndex] && (
      <Image
      src={images[currentImageIndex].src}
      alt={`Slide ${currentImageIndex + 1}`}
      width={images[currentImageIndex].width}
      height={images[currentImageIndex].height}
      className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700 hidden lg:block"
      />
    )}

    <MaxWidthWrapper>
      <div className="relative flex flex-col z-10 text-center md:text-left md:mt-0 py-6 max-w-xl mx-auto lg:-mx-20 lg:pl-0">
        <p>Integrated Media and Tech Studio &mdash;</p>
        <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl tracking-tight bg-gradient-to-tr from-blue-600 to-sky-400 bg-clip-text text-transparent">
            Maximize digital excellence in a connected world 
        </h1>
        <h2 className="mt-4 font-medium text-accent-foreground">Professional expertise for advance marketing</h2>
          <p className="my-4 text-md text-primary">
            Global center for media agencies, corporate, IT hubs and healthcare groups, looking to outsource autonomous tasks and talent
          </p>
          <div className="mt-4 text-center md:text-left">
            <Link href={"/contact"} passHref>
            <Button 
            className="bg-blue-500 inline-block md:inline-block lg:block" 
            variant="default"
            size="xl"
            >
              Get Started <span>&rarr;</span>
            </Button>
            </Link>
          </div>
            <p className="mt-8 align-text-bottom text-xs place-items-end justify-items-end text-accent-foreground">
            Managing $1mio ad revenue for 3+ global companies^
            </p>
        </div>
        <div id="floatingblock" className="lg:flex hidden">
          <FloatingBlock/>
        </div>
    </MaxWidthWrapper>
   </div>

   <MaxWidthWrapper>
    <div className="py-20 w-full flex flex-col items-center justify-center">
    <h2 className="font-bold mb-6 lg:text-5xl md:text-4xl text-3xl lg:text-secondary-foreground tracking-tight text-center">
      Transcend media, market and engineering
      </h2>
        <p className="max-w-prose-lg text-center font-medium mb-6">
         We are shaping the future of digital, with research, creativity and technology</p>
        <p className="max-w-screen-md text-center mb-6">
        Our approach is centered on leveraging data-driven consumer insights that drives competitive advantage, to reimagine and reinvent brands for digital-age of the coming
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 font-medium text-center text-sm text-primary-background items-center rounded-md my-6">
              <div className="p-4 border border-1 cursor-default rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-100"> Global Timezones</div>
              <div className="p-4 border border-1 cursor-default rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-100"> Agile Management</div>
              <div className="p-4 border border-1 cursor-default rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-100"> Precision Planning</div>
        </div>
        <Poweredby/>
    </div>
   </MaxWidthWrapper>

   <MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sm text-center items-center justify-center font-bold">
        WHAT WE DO
      </p>
      <h2 className="text-sky-500 font-bold mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl tracking-tight">
        Start up, Stack up, Scale up
      </h2>
      <p className='mx-auto pb-4 items-center justify-center text-center md:max-w-screen-md'>
        With over 12 years of extensive experience in media management and technology operations, we excel in providing top-quality content and tailored development solutions to meet the diverse media and marketing needs. Our expertise ensures unparalleled customer-service and outcomes
      </p>
    </div>
</MaxWidthWrapper>

    <Tabs/>

   <Brands/>

<Sectors/>

<MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sm text-center items-center justify-center font-bold">
        CORE CAPABILITIES
      </p>
      <h2 className="text-sky-500 font-bold mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
        Discover Our Services
      </h2>
      <p className='mx-auto pb-4 items-center justify-center text-center md:max-w-screen-md'>
      The belief we follow, the work we do, the brands we use, the bread we eat, everything revolves around the decisions we make. Discover how our services can maximize digital excellence in your connected world
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 md:p-12">
      {servicesData.map((service, index) => (
        <div key={index} className="relative w-full overflow-hidden rounded-md group">
          {/* Background Image */}
          <div className="w-full h-[300px] bg-cover bg-top"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${service.imageUrl})`,
              backgroundColor: 'lightgray',
            }}>
            <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 rounded-sm text-primary-foreground">{service.title}</h2>
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 py-6 bg-white bg-opacity-100 transition-opacity duration-100 opacity-0 group-hover:opacity-100">
              {/* Content */}
              <h3 className="text-sm font-light text-blue-400 mb-2">{service.useCase}</h3>
              <p className="text-sm">
                {service.description}
              </p>
              <span className="text-sm py-2">
                <a href={service.link}>See More <span>&#10132;</span></a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </MaxWidthWrapper>

  <Testimonials/>

<Workwithus/>

<UnderDev/>

  <Callaction/>

    </main>
  );
} 
