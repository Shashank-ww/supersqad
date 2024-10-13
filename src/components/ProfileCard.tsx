import React from 'react';
import { cn } from "@/lib/utils"; 
import Image from 'next/image';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

interface Profile {
  name: string;
  role: string;
  rate: number;
  expertise: string[];
  lastWorkedAt: string;
  verified: boolean;
  experience: number;
  image?: string; // Optional image property for profile picture
}

interface ProfileCardProps {
  profiles: Profile[]; // Change to accept an array of Profile
  children: React.ReactNode; // To accept buttons
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profiles, children }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Card key={profile.name} className='hover:bg-amber-100/40 hover:shadow-lg'>
          <CardHeader>
            <div className="flex items-center relative">
              <Image
                src={profile.image || '/webimgs/avatars/profiles/default.png'} // Added default image path
                alt={profile.name}
                width={128}
                height={128}
                className={cn("rounded-full w-16 h-16 mr-4")}
              />
              <span className="absolute bottom-0 left-0 bg-blue-500 rounded-full p-1">
                {profile.verified ? 
                (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="miter" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-amber-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="11" />
                  </svg>
                )}
              </span>
              <div>
                <CardTitle>{profile.name}</CardTitle>
                <CardDescription>{profile.role}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1">
                <li>
                    <span className='font-semibold'>Rate </span>
                    ${profile.rate}/hour
                </li>
                <li>
                    <span className='font-semibold'>Experience </span>
                    {profile.experience} years
                </li>
                <li>
                    <span className='font-semibold'>Last worked with </span>
                    {profile.lastWorkedAt}
                </li>
                <li>
                    <span className='font-semibold'>Expert in </span>
                <div className="flex flex-wrap gap-2 mt-2">
                    {profile.expertise.map((expertiseItem, index) => (
                    <div
                        key={index}
                        className="text-gray-800 border border-gray-600 rounded-full px-4 py-1 text-xs"
                    >
                        {expertiseItem}
                    </div>
                    ))}
                </div>
                </li>
            </ul>
            </CardContent>
          {/* <CardContent>
            <p>{profile.verified ? '✅Verified' : '⭕ Verification Awaited'}</p>
          </CardContent> */}
          <CardFooter>
            {children}
            </CardFooter> {/* Render children (buttons) here */}
        </Card>
      ))}
    </div>
  );
};

export default ProfileCard;
