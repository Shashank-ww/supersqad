"useClient";

// import { useState, useEffect } from 'react'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ContactForm } from "@/components/ContactForm"; // Ensure the component name starts with a capital letter
import { Button } from "@/components/ui/button";
import Callaction from "@/components/Callaction";

const Contact = () => {
    return (
        <>
        <div className="w-full relative items-center justify-center" style={{ 
                    backgroundImage: `url("/webimgs/contactimg.jpg")`, 
                    backgroundSize: "80%", 
                    backgroundPosition: "center 30%",
                    backgroundColor: "#fff5ee",
                }}>
                    <div className="absolute inset-0 bg-white opacity-50"></div>
                    <MaxWidthWrapper>
                    <div className="mx-auto py-20 min-h-[400px] flex flex-col items-left justify-center z-10">
                    <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0 z-10">
                    &#129174; CONTACT
                    </div>
                        <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-accent-foreground z-10">
                        Looking for something?
                        </h2>
                    </div>
                </MaxWidthWrapper>
                </div>


                <MaxWidthWrapper>
                    <div className="h-[auto] md:grid md:grid-cols-3 py-10 sm:py-12 gap-4 items-start justify-center sm:flex sm:flex-col sm:gap-6 sm:mx-0 sm:max-w-none sm:grid-cols-1">
                        {/* Contact us section */}
                        <div className="w-full text-xl items-center justify-start space-y-6">
                            <div className="p-4">
                            <h2 className="font-bold mb-4 lg:text-5xl md:text-4xl text-3xl lg:text-secondary-foreground tracking-tight">
                                Contact us
                                </h2>
                                <p className='text-base py-2'>Reach out to us for solutions, talent or a cup of tea! &#x2615;</p>
                            </div>

                            <div className="m-4 p-4 rounded-lg bg-zinc-100">
                                <div className="flex items-start pb-2 text-base font-semibold">New Business</div>
                                <div className="flex items-start text-base font-semibold text-blue-500">business@gmail.com</div>
                                <div className="flex items-start text-sm">+91 96 252 14 305</div>
                            </div>

                            <div className="m-4 p-4 rounded-lg bg-zinc-100">
                                <div className="flex items-start pb-2 text-base font-semibold">Collaborate</div>
                                <div className="flex items-start text-base font-semibold text-blue-500">collaborate@gmail.com</div>
                                <div className="flex items-start text-sm">+91 96 252 14 305</div>
                            </div>

                            {/* <div className="m-4 p-4 flex items-baseline">
                                <p className="text-base">
                                    Looking for a Job?
                                <a href="https://forms.gle/sihRooqtQVBCxcZ1A" target="_blank" rel="noopener noreferrer">
                                <Button className="text-black" variant="link" size="default"> 
                                Submit Form
                                </Button>
                                </a>
                                </p>
                            </div> */}

                        </div>

                        {/* "ContactForm" */}
                        <div className="col-start-2 col-span-2 p-6">
                            <ContactForm/>
                        </div>

                    </div>
                            
                </MaxWidthWrapper>
          
            <Callaction/>
  

                            <MaxWidthWrapper>
                                    <div className="Disclaimer m-4 p-4 text-gray-700 text-sm items-baseline flex flex-grow">
                                <h4 className="mr-1">Disclaimer: </h4>
                                <p className="text-xs font-light">We value your privacy. Any information you provide will be used solely for direct communication and will not be disclosed to any third party application.</p>
                            </div>
                            </MaxWidthWrapper>
        </>
    );
};

export default Contact;
