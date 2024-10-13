import Head from 'next/head';
import Image from 'next/image';
import MaxWidthWrapper from "@/components/maxwidthwrapper";

export default function Digital() {
    return (
        <main className="relative flex flex-col min-h-screen">
            <Head>
                <title>Digital Transformation Services - Superstackstudios</title>
                <meta name="description" content="Superstackstudios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth." />
                <meta name="keywords" content="digital transformation, AI, technology, digital media, business growth" />
                <meta name="author" content="Superstackstudios" />
                <meta property="og:title" content="Digital Transformation Services - Superstackstudios" />
                <meta property="og:description" content="Superstackstudios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth." />
                <meta property="og:image" content="/webimgs/services/digital.jpg" />
                <meta property="og:url" content="https://www.superstackstudios.com/services/digital" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Digital Transformation Services - Superstackstudios" />
                <meta name="twitter:description" content="Superstackstudios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth." />
                <meta name="twitter:image" content="/webimgs/services/digital.jpg" />
            </Head>
            <div className="w-full h-400px relative">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: `url("/webimgs/services/digital.jpg")`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center 10%",
                    }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <MaxWidthWrapper>
                    <div className="mx-auto py-20 min-h-[400px] flex flex-col items-left justify-center relative z-10">
                        <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0">
                            <a href="./#discover">&#129172; Discover Services</a>
                        </div>
                        <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-primary-foreground">
                            Digital Transformation
                        </h2>
                    </div>
                </MaxWidthWrapper>
            </div>
        <MaxWidthWrapper>
            <div className="py-24 lg:py-16 leading-7">
            <h1 className="font-bold mb-6 lg:text-5xl md:text-4xl text-3xl lg:text-secondary-foreground tracking-tight">Revive your media presence</h1>
            <div>
                <p>
                    In today&apos;s rapidly evolving digital landscape, staying competitive requires more than just a strong online presence. It demands a strategic approach to digital transformation that leverages the latest technologies and innovative solutions.
                </p>
                <p>
                    At Superstackstudios, we understand the challenges businesses face in adapting to the digital age. That is why we offer cutting-edge digital transformation services designed to help you navigate this ever-changing landscape with confidence.
                </p>
                <div className="w-full lg:w-full h-[500px] shadow-inner bg-cover bg-center relative group m-4" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/digital.jpg)`, backgroundColor: 'lightgray' }}></div>
                </div>
                <p>
                    Our team of experts specializes in harnessing the power of AI, machine learning, and data analytics to transform your digital media and drive business growth. Whether you are looking to optimize your website, enhance your social media presence, or implement advanced digital marketing strategies, we have the expertise and resources to help you succeed.
                </p>
                <h2 className="font-bold text-2xl mt-8 mb-4">Why Choose Superstackstudios for Digital Transformation?</h2>
                <ul className="list-disc ml-6 mb-6">
                    <li>Expertise in cutting-edge technology and AI</li>
                    <li>Customized solutions tailored to your business needs</li>
                    <li>Proven track record of delivering results</li>
                    <li>Dedicated team of experienced professionals</li>
                    <li>Continuous support and guidance throughout the process</li>
                </ul>
                <h2 className="font-bold text-2xl mb-4">Our Digital Transformation Process</h2>
                <p>
                    At Superstackstudios, we follow a comprehensive digital transformation process to ensure success:
                </p>
                <p className="mt-4">
                    Our process involves in-depth analysis, strategic planning, implementation, and ongoing monitoring and optimization to drive continuous improvement and maximize results.
                </p>
            </div>
        </MaxWidthWrapper>
        </main>
    );
}
