import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Stats from "@/components/Stats";
import Testimonials from "@/components/testimonials";
import Sectors from "@/components/Sectors";
import Link from "next/link";

const About = () => {
    return (
      <main className="relative flex flex-col min-h-screen">
      {/* Hero section with background image */}
      <div className="w-full h-[90vh] relative" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1496664444929-8c75efb9546f')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}>
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black opacity-50" style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(40, 180, 255, 0.0), rgba(30, 120, 255, 1))"
        }}></div>

        {/* About Us */}
        <div className="absolute inset-0 px-2.5 flex items-center justify-center cursor-default">
        <div className="pb-4 flex flex-col z-1 text-center max-w-4xl mx-auto">
          <p className="text-background underline underline-offset-4 font-bold">ABOUT US</p>
          <h1 className="tracking-tight font-bold lg:text-6xl md:text-5xl text-4xl lg:text-background">
            The Supersqad<span className="font-normal">story</span>
          </h1>
          <p className="my-4 text-md text-secondary">
            <i>Transforming <code>10100110</code>, One Byte a Time</i>
          </p>
          </div>
        </div>
      </div>

            <MaxWidthWrapper>
            <div className=" p-4 relative h-[auto] md:max-w-screen-lg mx-auto -mt-40 py-12 rounded-md text-center bg-white dark:bg-slate-900 items-center justify-center">
            <div className="px-4 mt-4 font-bold text-blue-500 md:mb-0 md:max-w-screen-md items-center justify-center mx-auto">
              OUR MISSION & VISION
            </div>
            <h2 className="px-4 py-2 mb-4 lg:text-4xl md:max-w-screen-md mx-auto md:text-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Brevity, integrity and wit </h2>
            <div className="md:max-w-screen-md items-center justify-center mx-auto text-gray-800">
              <ul> 
                <li className="py-2">We are Supersqadstudios, the creative and technology trailblazers of the future.
                  </li>
                <li className="py-2">With over 47 projects rescued from the jaws of failure, we are not just rewriting the rules of media production and technology – we are redefining what it means to succeed in the digital realms of life. 
                  </li>  
                <li className="py-2">And here&apos;s a kicker – our mission goes way beyond digital; <span className="font-bold"> We are in it to make real-world impact.</span>
                  </li>
                <li className="py-2">With a vision where capitalism isn&apos;t about making profits – but empowering people to make informed decisions.<span className="font-bold"> At Supersqadstudios, we&apos;re using the power of technology to do just that.</span> 
                  </li>
                <li className="py-2">Join us on our quest of digital frontier. Reach out for consulting or maybe a cup of tea!
                  </li>    
              </ul>
            </div>
            </div>
            </MaxWidthWrapper>

                     {/* View Work */}

         <MaxWidthWrapper>
      <div className='max-w-screen lg:py-24 sm:py-16 cursor-default'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='w-full mx-auto md:grid-cols-2 space-y-2 px-6'>
          {/* Large image on top row */}
          <div 
            className="w-full h-[200px] shadow-inner bg-cover bg-center p-4"
            style={{ 
            backgroundImage: `url(/webimgs/Planet-earth.jpg)`, 
            backgroundColor: 'lightgray',
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
            }}>
            </div>

          {/* Two smaller images on bottom row */}
          <div className="flex flex-row space-x-2">
          <div 
            className="w-1/2 h-[200px] shadow-inner bg-cover bg-center p-4" 
            style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517605817225-1a38c494d974')",
            backgroundPosition: 'center' 
            }}>
            </div>
          <div 
            className="w-1/2 h-[200px] shadow-inner bg-cover bg-top p-4" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1695654687465-6b7940a9f03a')", 
              backgroundPosition: 'center' 
            }}></div>
        </div>
        <p className="text-xs text-right text-slate-300 hover:underline">Representational Images: <a href="https://unsplash.com/">Unsplash</a></p>
        </div>

      <div className='flex flex-col items-start justify-start text-center md:text-left md:pl-8'>
      <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-7 font-bold tracking-tight pb-6'>Digital solutions, real-world impact</h1>
      <p className="text-md ">
        Our innovative strategies drive growth through creativity and results, crafting impactful marketing strategies and media production that drive real-world change. <br/> <br/> Join us in revolutionizing the future of digital media with impactful solutions, visual storytelling that elevates brand making a meaningful difference.
        </p>     
        <a href="/explore#work"> 
        <button className='bg-slate-500 w-[200px] rounded-md text-white hover:bg-blue-600 font-medium my-12 mx-auto md:mx-0 py-3'>
        View Work
        </button>
        </a>
    </div>
  </div>
</div>
</MaxWidthWrapper>

<MaxWidthWrapper>
      <div className="py-16 sm:py-24 flex flex-col mx-auto items-center justify-center gap-4">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="text-base font-bold leading-7 text-blue-600">OUR VALUES</h2>
          <p className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
            We believe in people, process and parity
          </p>
          <p className="mt-6 text-gray-700">
          Our principles ensure meticulous planning, fairness, and strategic alignment of people, driving innovative solutions and fostering an equitable and collaborative environment for all.
          </p>
        </div>
      </div>
  </MaxWidthWrapper>

<div className="bg-zinc-800">
  <MaxWidthWrapper>
  <div className="mx-auto max-w-screen-lg px-6 lg:px-8">
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 py-16 sm:py-24">
  <div className="lg:pl-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-bold leading-7 text-blue-400">WHO WE ARE</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-3xl">Partner in delivering digital solutions to help maximize online presence</h1>
          <p className="mt-6 leading-7 text-white">A go-to hub for businesses undergoing digital transformation, asset production or technology integration into all aspects of executable operations, client experiences, optimized processes, and data-driven decision-making.</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
            <div className="relative pl-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 absolute left-0 top-1 text-inherit">
                <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
              </svg>
              <dt className="inline-flex font-semibold text-white">
                Media and Tech Studio
              </dt>
              <dd className="inline-block font-light">Streamline service-ops, media production or tailored marketing solutions by experts.</dd>
            </div>
            <div className="relative pl-12">
              <dt className="inline-flex font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 absolute left-0 top-1 text-inherit">
                  <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
                </svg>
                Talented Offshore Experts
              </dt>
              <dd className="inline-block font-light">Maximize productivity with Full-Time Equivalent (FTE) resources dedicated to projects, while seamlessly integrating with your existing teams.</dd>
            </div>
          </dl>
        </div>
      </div>
    <div className="w-full lg:h-auto bg-cover bg-center" 
      style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1663645446482-8c4d17787448?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
      }}>
      </div>
    </div>
</div>
  </MaxWidthWrapper>
</div>

<Stats/>
     
   {/* Pointers Section 1 */}
   <MaxWidthWrapper>
      <div className='w-full bg-secondary-background py-24 sm:py-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center text-center md:text-right md:pr-8'>
            <p className='text-blue-500 font-bold'>FIND RESOURCES</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pb-6 tracking-tight'>Get skilled talent</h1>
            <p>Whether you are seeking innovative solutions, expert guidance, or specialized skills, we provide access to top talent across various industries. We prioritize quality and expertise, ensuring that you find the right individuals who can drive projects forward. <br/> <br/>
            Discover the difference that the right talent can make and start building your dream team today.
            </p>      
            <button className='bg-slate-500 w-[200px] text-white hover:bg-blue-800 rounded-md font-medium my-6 md:ml-auto mx-auto md:mx-0 py-3'><Link href={"./talent"}>Get Started</Link></button>
          </div>
          <div className='max-w-[500px] md:w-[auto] h-[auto] bg-slate-800 rounded-md bg-cover bg-center mx-auto my-4'>
          <div className='text-primary-foreground m-8 p-4'>
            <h1 className='font-bold text-xl'>Why Supersqadstudios?</h1> 
            <p className='py-4'>
            Access the top skilled talent-house on <a href="#"><u>Supersqad.com</u></a> and start working with contractors around the world without ever having to worry about the cost.
            </p>
            <div className='py-4'>
            <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
      </svg>
       <h3 className="group-hover:text-white text-sm font-semibold">Scalable Team</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">From one to many, get resources basis project requirements.
              </p>
              </div>
        <div className='py-4'> 
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <h3 className="group-hover:text-white text-sm font-semibold">Verified Resources</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">Based on skillsets, aptitude and location.
              </p>
              </div>
      </div>
      </div>
  </div>
</div>
</MaxWidthWrapper>

{/* Pointers Section 2*/}
<MaxWidthWrapper>
<div className='w-full bg-secondary-background py-24 sm:py-16'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <div className='max-w-[500px] md:w-[auto] h-[auto] bg-gray-600 rounded-md bg-cover bg-center mx-auto my-4'>
      <div className='text-primary-foreground m-8 p-4'>
      <h1 className='font-bold text-primary-foreground text-xl'>Why work with us?</h1> 
      <p className='py-4'>
      Find top remote jobs with contractors and employers on <a href="#"><u>Supersqad.com</u></a> and start working with a client around the world.
      </p>
      <div className='py-4'>
      <div className="flex items-center space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
            </svg>
            <h3 className="group-hover:text-white text-sm font-semibold">Dedicated Hiring</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">Regular hiring for agile media and tech ops.
              </p>
              </div>
        <div className='py-4'>
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
              </svg>
              <h3 className="group-hover:text-white text-sm font-semibold">Direct Pay</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">UPI, Credit Card and Bank Remittance.
              </p>
              </div>
         </div>
      </div>
     <div className='flex flex-col justify-center text-center md:text-left md:pl-8'>
      <p className='text-blue-500 font-bold'>FIND WORK</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pb-6 tracking-tight'>Gateway to meaningful work</h1>
      <p>Enjoy work flexibility while collaborating on cutting-edge projects with leading companies. We help you connect with opportunities across diverse fields, allowing you to achieve your career goals from anywhere in the world. <br/> <br/> Discover the best remote jobs and become part of a thriving global workforce today.</p>      
      <button className='bg-slate-500 w-[200px] text-white hover:bg-blue-600 rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><Link href={"./resources"}>Get Started</Link></button>
    </div>
  </div>
</div>  
</MaxWidthWrapper> 

<Sectors/>

<Testimonials/>

{/* Call to action */}

        <MaxWidthWrapper>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl rounded-md sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-gradient-to-bl from-slate-100 to-zinc-200">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary-background sm:text-4xl">
              Outsource Process.
              <br />
              Expert Resources.
            </h2>
            <p className="mt-6 text-primary-background">
            With commitment to excellence and creative innovation, as your strategic partner, we provide solutions and opportunities for growth and success. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="./explore"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Know More
              </a>
              <a href="./services" className="text-sm font-semibold leading-6 text-primary-background">
                Find Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
          <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-md bg-white/5 ring-1 ring-white/10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1576267423429-569309b31e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            </div>
            </div>
          </div>
          </div>
          </MaxWidthWrapper>

        </main>
    );
};

export default About;
