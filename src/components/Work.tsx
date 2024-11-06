"use client";

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';

interface WorkItem {
    id: number;
    image: string;
    unoptimized?: boolean;
    description: string;
    likes: number;
    link: string;
    width: number;
    height: number;
}

const workItems: WorkItem[] = [
    { 
        id: 1, 
        image: '/webimgs/work/wwf1.png', 
        unoptimized: false,
        description: 'WWF social media camapign post for oceanic pollution', 
        likes: 10, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 2, 
        image: '/webimgs/work/landing2.png', 
        unoptimized: false,
        description: 'Godrej Royale Woods festive newsletter for the top clienteles', 
        likes: 9, 
        link: '#', 
        width: 500, 
        height: 1100 // Horizontal
    },
    { 
        id: 3, 
        image: '/webimgs/work/stockx.jpg', 
        unoptimized: false,
        description: 'Blockchain website aiming at future of global trade and tokenization', 
        likes: 11, 
        link: '#', 
        width: 500, 
        height: 800 // Horizontal
    },
    { 
        id: 4, 
        image: '/webimgs/work/lgsocial.jpg', 
        unoptimized: false,
        description: 'LG social media campaign for washing machine with larger drum capacity', 
        likes: 7, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 5, 
        image: '/webimgs/work/gp1.png', 
        unoptimized: false,
        description: 'Social media post for climate change', 
        likes: 2, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 6, 
        image: '/webimgs/work/social.gif', 
        unoptimized: true,
        description: 'Social media campaign for climate change activism', 
        likes: 6, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 7, 
        image: '/webimgs/work/rishikesh.gif', 
        unoptimized: true,
        description: 'Interior design landing page for large scale architect', 
        likes: 5, 
        link: '#', 
        width: 400, 
        height: 800 // Horizontal
    },
    { 
        id: 8, 
        image: '/webimgs/work/lgpost.png', 
        unoptimized: false,
        description: 'LG social media campaign for washing machine with large-capacity drum', 
        likes: 53, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 9, 
        image: '/webimgs/work/germbanner.jpg', 
        unoptimized: false,
        description: 'Godrej Protekt handwash range website banner', 
        likes: 3, 
        link: '#', 
        width: 1100, 
        height: 500 // Horizontal
    },
    { 
        id: 10, 
        image: '/webimgs/work/wwf2.png', 
        unoptimized: false,
        description: 'Inbound lead generation campaign', 
        likes: 8, 
        link: '#', 
        width: 300, 
        height: 300 // Square
    },
    { 
        id: 11, 
        image: '/webimgs/work/peace.gif', 
        unoptimized: true,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 23, 
        link: '#', 
        width: 400, 
        height: 800 // Vertical
    },
    { 
        id: 12, 
        image: '/webimgs/work/oxfamplanet.gif', 
        unoptimized: true,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 22, 
        link: '#', 
        width: 500, 
        height: 500 // Square
    },
    { 
        id: 13, 
        image: '/webimgs/work/bsc2.jpg', 
        unoptimized: false,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 18, 
        link: '#', 
        width: 500, 
        height: 900 // Square
    },
    { 
        id: 14, 
        image: '/webimgs/work/bsc1.jpg', 
        unoptimized: false,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 19, 
        link: '#', 
        width: 500, 
        height: 900 // Vertical
    },
    { 
        id: 15, 
        image: '/webimgs/work/multichannel.gif', 
        unoptimized: true,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 34, 
        link: '#', 
        width: 400, 
        height: 400 // Horizontal
    },
    { 
        id: 16, 
        image: '/webimgs/work/campaign.png', 
        unoptimized: false,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 25, 
        link: '#', 
        width: 400, 
        height: 400 // Vertical
    },
    { 
        id: 17, 
        image: '/webimgs/work/bsbanner.jpg', 
        unoptimized: false,
        description: 'Godrej festive campaign for Diwali on Instagram', 
        likes: 12, 
        link: '#', 
        width: 1200, 
        height: 500 // Horizontal
    },
];

const Work = () => {
    const [likes, setLikes] = useState(workItems.map(item => item.likes));

    const handleLike = (index: number) => {
        const newLikes = [...likes];
        newLikes[index]++;
        setLikes(newLikes);
    };

    const getSpanClass = (width: number, height: number) => {
        const largeWidth = 800; // Considered large width for horizontal banners
        const largeHeight = 600; // Considered large height for vertical images
    
        if (width > largeWidth && height < largeHeight) {
            // Wider banners take up 3 columns
            return 'col-span-3';
        } else if (height > largeHeight && width < largeWidth) {
            // Taller images take up 2 rows
            return 'row-span-2';
        } else if (width > largeWidth && height > largeHeight) {
            // Large images in both dimensions take up 3 columns and 2 rows
            return 'col-span-3 row-span-2';
        } else {
            // Regular images
            return '';
        }
    };
 
    return (
        <MaxWidthWrapper>
            <div id='work' className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[200px] py-16">
                {workItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative overflow-hidden rounded-lg ${getSpanClass(item.width, item.height)} w-full group`}>
                        <a href={item.image} target='_blank' className="block h-full">
                            <Image
                                src={item.image}
                                alt={item.description}
                                width={item.width}
                                height={item.height}
                                unoptimized={item.unoptimized}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="text-white p-4 text-sm text-muted-foreground">{item.description}</div>
                            </div>
                        </a>
                        <div className="absolute bottom-2 left-2 p-2">
                            <button
                                className="bg-white rounded-full w-12 h-8 border-dotted border-2 border-white text-xs cursor-pointer items-end justify-center transform translate-y-16 duration-100 ease-in-out group-hover:translate-y-0 group-hover:border-yellow-400 group-hover:shadow-[0_0_10px_2px_rgba(255,255,0,0.6)]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLike(index);
                                }}
                            >
                                &#x1F496;<span>{likes[index]}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};

export default Work;
