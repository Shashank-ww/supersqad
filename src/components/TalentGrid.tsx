// TalentGrid.tsx
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { profileData, talents } from '@/data/profiles'; // Ensure this path is correct
import ProfileCard from '@/components/ProfileCard'; // Ensure this path is correct
import MaxWidthWrapper from './MaxWidthWrapper';

const TalentGrid: React.FC = () => {
  const [activeTalent, setActiveTalent] = useState<typeof talents[number]>(talents[0]); // Default to the first talent

  // Get the profile data based on the active talent
  const activeProfiles = profileData[activeTalent]; // This should return an array of profiles

  return (
    <MaxWidthWrapper>
    <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      {/* Left Talent Tabs */}
      <div className="space-y-2">
      {talents.map((talent) => (
        <div key={talent} className="mb-1"> {/* Wrapper div for spacing */}
            <button
            onClick={() => setActiveTalent(talent)}
            className={`w-full text-left p-4 rounded-t-sm
                ${activeTalent === talent 
                ? 'bg-blue-500 text-white' 
                : 'bg-transparent text-gray-800'
                }`}
            >
            {talent.replace(/([A-Z])/g, ' $1').trim()} {/* Adding space before uppercase letters */}
            </button>
            <div className="border-b border-slate-100/90 w-full"></div> {/* Border separator */}
        </div>
        ))}
      </div>

      {/* Right Profile Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {activeProfiles.map((profile, index) => (
          <ProfileCard key={profile.name} profiles={[profile]}>
            {/* Children - Buttons */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Button variant={'default'} className="w-full">Hire Now</Button>
                <Button variant={'link'} className="w-full">View Profile</Button>
            </div>
          </ProfileCard>
        ))}
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default TalentGrid;
