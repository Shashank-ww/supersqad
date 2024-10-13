import Features from "@/components/Features";
import Calltoaction from "@/components/Callaction";
import Faqs from "@/components/Faqs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Services = () => {
    return (
        <main className="relative flex flex-col min-h-screen">
        <div className="w-full h-400px relative items-center justify-center" style={{ 
            backgroundImage: `url("/webimgs/side5.png")`, 
            backgroundSize: "cover", 
            backgroundPosition: "center 10%",
        }}>
            <div className="relative inset-0 bg-white dark:bg-black opacity-70"></div>
            <MaxWidthWrapper>
            <div className="mx-auto py-20 min-h-[400px] flex flex-col items-left justify-center">
            <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0">
            &#129174; FIND YOUR WORK
            </div>
                <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-accent-foreground">
                Top-Tier Outsourcing
                </h2>
            </div>
        </MaxWidthWrapper>
        </div>


{/* Three point RTBs*/}
{/* 
<MaxWidthWrapper>
<div className="overflow-hidden py-12 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <div className="w-full lg:h-auto bg-cover bg-center rounded-md" 
      style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1498758536662-35b82cd15e29')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
      }}>
      </div>
      <div className="lg:pl-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Market Smarter, Grow Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Global Capability Center for Full-Service Outsourcing</p>
          <p className="mt-6 leading-7 text-gray-600">A go-to hub for teams undergoing digital transformation with asset production and to integrate technologies into all aspects of their operations, enhancing customer experiences, optimizing business processes, and driving data-driven decision-making.</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-12">
                <svg className="absolute left-1 top-1 h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
              <dt className="inline-flex font-semibold text-gray-900">
                Outsource Process
              </dt>
              <dd className="inline-block">Streamline services-ops by outsourcing critical processes to experts. We handle core media and tech operations, ensuring efficiency, cost-effectiveness, and high-quality outcomes.</dd>
            </div>
            <div className="relative pl-12">
              <dt className="inline-flex font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                Dedicated Experts
              </dt>
              <dd className="inline-block">Maximize productivity with 100% Full-Time Equivalent (FTE) resources dedicated to your projects, providing consistent, high-quality performance and seamless integration with your existing teams.</dd>
            </div>
            <div className="relative pl-12">
              <dt className="inline-flex font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                Get Consultation
              </dt>
              <dd className="inline-block">Powered by industry-leading data-intel, we provide detailed insights and actionable intelligence, to make informed decisions, optimize strategies, and drive business growth.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>
</MaxWidthWrapper> */}

<Features/>

{/* Services Categories Card */}

     <MaxWidthWrapper>
     <div id="discover" className='flex flex-col justify-center text-center md:mt-12 py-8 md:text-left cursor-default'>
      <h1 className='tracking-tight lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold pb-6'>Discover Services</h1>
      <p className='py-2 font-light'>
      The work we do, the belief we follow, the brands we use, the bread we eat, everything revolves around the choices we make. 
      Discover how our services can drive your success and transform your vision into reality. <br/> <br/>
          <span className="underline"> Choose from our popular services:</span>
        </p>
    </div>

{/* Services Set 1  */}

     <div className="flex flex-col my-4 gap-4 lg:flex-row">
     <div className="w-full lg:w-1/3 h-[300px] shadow-inner bg-cover bg-center relative group" 
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/digital.jpg)`, backgroundColor: 'lightgray' }}>
      <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 text-primary-foreground">DIGITAL TRANSFORMATION</h2>
      <div className="absolute w-full h-full flex flex-col items-left px-4 justify-center bottom-0 bg-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="font-light text-md text-blue-500 py-2">Case Study</h3>
        <p className="pb-4">
        Our data-driven strategies, ensure your brand effectively reaches audience, yielding measurable results.
        </p>
        <a href="/services/digital"><span>See More</span> <span className="hover:text-blue-500 hover:cursor-pointer transition-transform duration-300 transform hover:translate-x-2"> &#10132; </span></a>
      </div>
    </div>
    <div className="w-full lg:w-1/3 h-[300px] shadow-inner bg-cover bg-top relative group" 
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/devops.jpg)`, backgroundColor: 'lightgray' }}>
      <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 text-primary-foreground">DEVOPS & CLOUD SERVICES</h2>
      <div className="absolute w-full h-full flex flex-col items-left px-4 justify-center bottom-0 bg-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <h3 className="font-light text-md text-blue-500 py-2">Case Study</h3>
        <p className="pb-4">
        Streamlined DevOps and cloud solutions that gives you an uninterrupted access to your data and applications.
        </p> <a href="/services/devops" className="hover:text-blue-500 hover:cursor-pointer transition-transform duration-300 transform hover:translate-x-2"> &#10132; </a>
      </div>
    </div>
    <div className="w-full lg:w-1/3 h-[300px] shadow-inner bg-cover bg-top relative group" 
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/mediaops.jpg)`, backgroundColor: 'lightgray' }}>
      <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 text-primary-foreground">MEDIA OPS & PRODUCTION</h2>
      <div className="absolute w-full h-full flex flex-col items-left px-4 justify-center bottom-0 bg-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <h3 className="font-light text-md text-blue-500 py-2">Case Study</h3>
        <p className="pb-4">
        Insight-driven ad campaigns, video production and campaign ops, amplified through media channels, including digital, social, print, billboards and OTT-broadcast.
        </p> <a href="/services/media" className="hover:text-blue-500 hover:cursor-pointer transition-transform duration-300 transform hover:translate-x-2"> &#10132; </a>
      </div>
    </div>
</div>

{/* Services Set 2 */}

     <div className="flex flex-col my-4 gap-4 lg:flex-row">
     <div className="w-full lg:w-1/3 h-[300px] shadow-inner bg-cover bg-top relative group" 
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/uiux.jpg)`, backgroundColor: 'lightgray' }}>
      <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 text-primary-foreground">SOFTWARE DEVELOPMENT</h2>
      <div className="absolute w-full h-full flex flex-col items-left px-4 justify-center bottom-0 bg-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <h3 className="font-light text-md text-blue-500 py-2">Case Study</h3>
        <p className="pb-4">
        Our specialized engineers define, build, and maintain any software - customized to the exact requirements of your company or client.
        </p> <a href="/services/software" className="hover:text-blue-500 hover:cursor-pointer transition-transform duration-300 transform hover:translate-x-2"> &#10132; </a>
      </div>
    </div>
    <div className="w-full lg:w-1/3 h-[300px] shadow-inner bg-cover bg-center relative group" 
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(/webimgs/services/dapps.jpg)`, backgroundColor: 'lightgray' }}>
      <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 text-primary-foreground">APPLICATION MANAGEMENT</h2>
      <div className="absolute w-full h-full flex flex-col items-left px-4 justify-center bottom-0 bg-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <h3 className="font-light text-md text-blue-500 py-2">Case Study</h3>
        <p className="pb-4">
        Focused teams on relevant needs such as IT support, UI/UX, site scalability, data monitoring and improved web applications.
        </p> <a href="/services/dapps" className="hover:text-blue-500 hover:cursor-pointer transition-transform duration-300 transform hover:translate-x-2"> &#10132; </a>
      </div>
    </div>
    <div className="w-full lg:w-1/3 h-[300px] shadow-inner bg-cover bg-center relative group" 
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(/webimgs/services/cherry.jpg)`, backgroundColor: 'lightgray' }}>
      <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 text-primary-foreground">CREATIVE BRANDING</h2>
      <div className="absolute w-full h-full flex flex-col items-left px-4 justify-center bottom-0 bg-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <h3 className="font-light text-md text-blue-500 py-2">Case Study</h3>
        <p className="pb-4">
        With high valued industry-personnels crafting beautiful, engaging and exclusive content that drives engagement along with your business.
        </p> <a href="/services/creative" className="hover:text-blue-500 hover:cursor-pointer transition-transform duration-300 transform hover:translate-x-2"> &#10132; </a>
      </div>
    </div>
    </div>
     </MaxWidthWrapper>

<Faqs/>

<Calltoaction/>

        </main>
    );
};

export default Services;
