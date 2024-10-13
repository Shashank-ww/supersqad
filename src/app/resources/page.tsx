"useClient";

import { useState, useEffect } from 'react'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Resources = () => {
    return (
        <main className="relative flex flex-col min-h-screen">
        <div className="w-full h-400px relative items-center justify-center" style={{ 
                    backgroundImage: `url("/webimgs/side3.png")`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center 10%",
                }}>
                    <div className="relative inset-0 bg-white dark:bg-black opacity-70"></div>
                    <MaxWidthWrapper>
                    <div className="mx-auto py-20 min-h-[400px] flex flex-col items-left justify-center">
                    <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0">
                    &#129174; RESOURCES
                    </div>
                        <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-accent-foreground">
                        Looking for something?
                        </h2>
                    </div>
                </MaxWidthWrapper>
                </div>


        <MaxWidthWrapper>
        <div className="h-[auto] md:grid md:grid-cols-3 py-12 sm:py-16 gap-4 items-start justify-start sm:flex sm:flex-col sm:gap-8 sm:mx-0 sm:max-w-none sm:grid-cols-1">
    <div className="w-full text-xl flex items-start justify-start">
        <div className="p-4 text-xl font-bold">
            Contact us
            <p className='font-light text-base py-4'>Reach out to us for solutions, coffee, or say Hi!</p>
        </div>
    </div>
    <div className="text-xl py-2 flex flex-col gap-8">
        <div className="p-4 rounded-lg bg-zinc-100">
            <div className="flex items-start pb-2 text-base font-semibold">New Business</div>
            <div className="flex items-start text-base font-semibold text-blue-500">business@gmail.com</div>
            <div className="flex items-start text-sm">+91 96 252 14 305</div>
        </div>
    </div>
    <div className="text-xl py-2 flex flex-col gap-8">
        <div className="p-4 rounded-lg bg-zinc-100">
            <div className="flex items-start pb-2 text-base font-semibold">Collaborate</div>
            <div className="flex items-start text-base font-semibold text-blue-500">collaborate@gmail.com</div>
            <div className="flex items-start text-sm">+91 96 252 14 305</div>
        </div>
    </div>
</div>



                    Media Kit 
                    Blogs 
                    Contact 
                    Resource Kit 
                    Career 
                    Jobs 
                    
        </MaxWidthWrapper>
        </main>
    );
};

export default Resources;
