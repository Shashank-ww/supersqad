import React, { useState } from 'react';
import { Profile } from '@/data/profiles';

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    role: '',
    rate: 0,
    expertise: [],
    lastWorkedAt: '',
    experience: 0,
    verified: false,
    image: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setProfile((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : name === 'rate' || name === 'experience' ? Number(value) : value,
    }));
  };

  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target as HTMLInputElement;

    setProfile((prev) => {
      const updatedExpertise = checked
        ? [...prev.expertise, value]
        : prev.expertise.filter((skill) => skill !== value);
      return { ...prev, expertise: updatedExpertise };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error('Failed to create profile.');
      }

      setMessage('Profile created successfully!');
      setProfile({
        name: '',
        role: '',
        rate: 0,
        expertise: [],
        lastWorkedAt: '',
        experience: 1.5,
        verified: false,
        image: '',
      });
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-center">Create Your Profile</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
        <input type="text" name="role" value={profile.role} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <div>
        <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
        <input type="number" name="rate" value={profile.rate} onChange={handleChange} required min={0} step={1} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expertise</label>
        {['DevOps', 'Git', 'Node.js', 'JavaScript'].map((skill) => (
          <div key={skill} className="flex items-center">
            <input
              type="checkbox"
              id={skill}
              name="expertise"
              value={skill}
              checked={profile.expertise.includes(skill)}
              onChange={handleExpertiseChange}
              className="mr-2"
            />
            <label htmlFor={skill}>{skill}</label>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="lastWorkedAt" className="block text-sm font-medium text-gray-700">Last Worked At</label>
        <input type="text" name="lastWorkedAt" value={profile.lastWorkedAt} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (Years)</label>
        <input type="number" name="experience" value={profile.experience} onChange={handleChange} required min={0} step={1} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Verified</label>
        <input type="checkbox" name="verified" checked={profile.verified} onChange={handleChange} className="mr-2" />
        <span>{profile.verified ? 'Yes' : 'No'}</span>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input type="url" name="image" value={profile.image} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      {message && <div className={`text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</div>}

      <div className="text-center">
        <button type="submit" disabled={isSubmitting} className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isSubmitting ? 'Submitting...' : 'Submit Profile'}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
