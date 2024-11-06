// profiles.ts

export interface Profile {
  name: string;
  role: string;
  rate: number;
  expertise: string[];
  lastWorkedAt: string;
  experience: number;
  verified: boolean;
  image: string; // Ensure image is always a string, can be empty
}

export const Talents = [
  'Developers',
  'Designers',
  'ProjectManagers',
  'ProductManagers',
  'MarketingExperts',
  'Producers',
  'VirtualAssistant',
] as const; // Use as const to infer the exact string literal types

// Update profileData to have an array of profiles for each talent
export const profileData: Record<typeof Talents[number], Profile[]> = {
  Developers: [
    {
      name: "Gabriel Courtemanche",
      role: "JavaScript Developer",
      rate: 25,
      expertise: ["DevOps", "Git", "Node.js", "JavaScript"],
      lastWorkedAt: "Shopify",
      experience: 3,
      verified: true,
      image: '/webimgs/avatars/profiles/girl1.jpg',
    },
    {
      name: "Loren Weissman",
      role: "Python Developer",
      rate: 23,
      expertise: ["Flask", "Django", "Git"],
      lastWorkedAt: "Google",
      experience: 1.5,
      verified: false,
      image: '/webimgs/avatars/profiles/boy1.jpg',
    },
  ],
  Designers: [
    {
      name: "Alicia Johnson",
      role: "UX/UI Designer",
      rate: 24,
      expertise: ["Figma", "Sketch", "Adobe XD"],
      lastWorkedAt: "Figma",
      experience: 4,
      verified: true,
      image: '/webimgs/avatars/profiles/girl3.jpg',
    },
    {
      name: "Dave John",
      role: "React Developer",
      rate: 20,
      expertise: ["Mongodb", "Express", "Git"],
      lastWorkedAt: "Google",
      experience: 1.5,
      verified: true,
      image: '/webimgs/avatars/profiles/boy2.jpg',
    },
    {
      name: "Amercia Logan",
      role: "JS Developer",
      rate: 15,
      expertise: ["Native", "Django", "Git"],
      lastWorkedAt: "Google",
      experience: 2,
      verified: false,
      image: '/webimgs/avatars/profiles/girl5.jpg',
    },
  ],
  ProjectManagers: [
    {
      name: 'Alex Martin',
      role: 'Project Manager',
      rate: 20,
      expertise: ['Agile', 'Scrum', 'Jira', 'Trello'],
      lastWorkedAt: 'Microsoft',
      experience: 2,
      verified: true,
      image: '/webimgs/avatars/profiles/girl4.jpg',
    },
    {
      name: "Amisha Patel",
      role: "Account Manager",
      rate: 10,
      expertise: ["Flask", "Django", "Git"],
      lastWorkedAt: "Google",
      experience: 1,
      verified: false,
      image: '/webimgs/avatars/profiles/girl5.jpg',
    },
    {
      name: "Devi Sharma",
      role: "Senior Manager",
      rate: 18,
      expertise: ["Flask", "Django", "Git"],
      lastWorkedAt: "Google",
      experience: 2.6,
      verified: true,
      image: '/webimgs/avatars/profiles/girl6.jpg',
    },
    {
      name: "Dhruv Gautam",
      role: "Python Developer",
      rate: 14,
      expertise: ["Flask", "Django", "Git"],
      lastWorkedAt: "Google",
      experience: 2.2,
      verified: false,
      image: '',
    },
    {
      name: "Sara Ali Khan",
      role: "Sr. Manager",
      rate: 20,
      expertise: ["Flask", "Django", "Git"],
      lastWorkedAt: "Google",
      experience: 2.2,
      verified: true,
      image: '',
    },
  ],
  ProductManagers: [
    {
      name: 'Sophia Lee',
      role: 'Product Manager',
      rate: 24,
      expertise: ['Roadmaps', 'User Stories', 'Market Research'],
      lastWorkedAt: 'Amazon',
      experience: 2,
      verified: true,
      image: '',
    },
  ],
  MarketingExperts: [
    {
      name: 'Mark Thompson',
      role: 'Marketing Strategist',
      rate: 27,
      expertise: ['SEO', 'Google Ads', 'Content Marketing'],
      lastWorkedAt: 'HubSpot',
      experience: 2.2,
      verified: true,
      image: '',
    },
  ],
  Producers: [
    {
      name: 'David Smith',
      role: 'Visual Effects Artist',
      rate: 14,
      expertise: ['Maya', 'After Effects', 'Cinema 4D'],
      lastWorkedAt: 'Pixar',
      experience: 3.5,
      verified: false,
      image: '',
    },
  ],
  VirtualAssistant: [
    {
      name: 'Jennifer Taylor',
      role: 'Virtual Assistant',
      rate: 15,
      expertise: ['Calendar Management', 'Email Support', 'Data Entry'],
      lastWorkedAt: 'RemoteCo',
      experience: 3,
      verified: true,
      image: '',
    },
  ],
} as const; // Ensure to use 'as const' for type inference
