"use client";

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Assuming Next.js is used

const TabsCard = [
  {
    id: 1,
    label: 'Global Outsourcing',
    content: {
      tabname: 'GLOBAL OUTSOURCING',
      title: 'Outsource business processes',
      text: 'Outsource tech or media processes, like DevOps, Management, or Video Production.',
      image: '/webimgs/explore/process.png', // Replace with your actual image path
      description: 'Top-tier project management services tailored to your business needs. With our proven track record, we specialize in delivering efficient, cost-effective solutions to enhance productivity. Contact now to outsource projects.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 group">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
        </svg>
      ),
    },
  },
  {
    id: 2,
    label: 'Sub-Contract Studio',
    content: {
      tabname: 'SUB-CONTRACT STUDIO',
      title: 'Get dedicated contractors',
      text: 'Get dedicated contractors for autonomous projects and regular tasks.',
      image: '/webimgs/explore/offshore.png', // Replace with your actual image path
      description: 'Leverage our expertise with dedicated resources, to streamline operations and achieve business goals faster. Contact now to access our dedicated resources and take your projects to the next level with unmatched proficiency and dedication.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      ),
    },
  },
  {
    id: 3,
    label: 'Business Consulting',
    content: {
      tabname: 'BUSINESS CONSULTING',
      title: 'Get started with your project',
      text: 'Get started with a brief of your project on media and marketing strategies.',
      image: '/webimgs/explore/consulting.png', // Replace with your actual image path
      description: 'Accelerate your business success with expert consultants providing strategies and insights to drive growth and optimize business performance. Contact now to tap into our expertise and unlock your full potential with our comprehensive growth consultation services.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      ),
    },
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to Tab 1

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const activeContent = TabsCard.find(tab => tab.id === activeTab)?.content;

  return (
    <MaxWidthWrapper>
      <div id='tabs' className="w-full mx-auto py-12">
        {/* Tab Navigation */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 pb-11 border-b-2 border-gray-300">
          {TabsCard.map((tab) => (
            <div key={tab.id}>
              <button
                onClick={(e) => {
                    e.preventDefault(); // Prevent default action
                    handleTabClick(tab.id); // Handle tab click
                }}
                className={`group block max-w-sm mx-auto rounded-lg p-6 ring-1 ring-slate-900/5 space-y-3 ${
                    activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg' // Highlight active tab
                    : 'bg-zinc-100 text-gray-800 hover:ring-amber-500 ring-2' // Default style for inactive tabs
                }`}
                >
                <div className="flex space-x-3">
                    {tab.content.svg}
                    <h3 className="text-xl font-semibold">{tab.label}</h3>
                </div>
                <p className="text-sm text-left">{tab.content.text}</p>
                </button>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-24">
            {/* Image Section */}
            <div className="relative w-full h-72">
              <Image
                src={activeContent.image}
                alt={`Image for ${activeContent.title}`}
                width={600}
                height={600}
                className="rounded-md object-contain w-full h-full"
              />
            </div>

            {/* Content Section */}
            <div className='pl-4'>
              <h2 className="text-base font-bold leading-7 text-blue-500">{activeContent.tabname}</h2>
              <h1 className="py-2 text-xl font-bold tracking-tight text-primary sm:text-3xl">
                {activeContent.title}
              </h1>
              <p className="py-2 leading-7">{activeContent.description}</p>
              <a href='/explore#work'>
              <Button variant={'outline'} className='mt-4'>
                See work
              </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Tabs;
