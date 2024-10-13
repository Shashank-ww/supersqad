// components/ProfileForm.tsx
"use client"

import React, { useState } from 'react';
import { ProfileData } from '@/lib/types/index';

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    email: '',
    resume: '',
    hourlyRate: 0,
    experience: 0,
    ratings: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]:
        name === 'hourlyRate' || name === 'experience' || name === 'ratings'
          ? Number(value)
          : value,
    }));    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
  
    try {
      const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
  
      if (!response.ok) {
        // Attempt to parse error response as JSON or fallback to text
        let errorMessage = 'Failed to create profile.';
        try {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } else {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          }
        } catch (err) {
          errorMessage = 'Failed to process error response.';
        }
        throw new Error(errorMessage);
      }
  
      // If the request was successful, read and handle the response body
      const data = await response.json();
      setMessage('Profile created successfully!');
      console.log('Profile created:', data);
  
      // Reset form fields
      setProfile({
        name: '',
        email: '',
        resume: '',
        hourlyRate: 0,
        experience: 0,
        ratings: 0,
      });
    } catch (error) {
        let errorMessage = 'An unexpected error occurred.';
        
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        console.error('Error submitting profile:', error);
        setMessage(errorMessage);
    } finally {
        setIsSubmitting(false);
    }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex flex-col p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center">Create Your Profile</h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={profile.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={profile.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="john.doe@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700"
        >
          Resume/Profile Details
        </label>
        <textarea
          name="resume"
          id="resume"
          value={profile.resume}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe your experience, skills, and other relevant details."
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="hourlyRate"
          className="block text-sm font-medium text-gray-700"
        >
          Hourly Rate ($)
        </label>
        <input
          type="number"
          name="hourlyRate"
          id="hourlyRate"
          value={profile.hourlyRate}
          onChange={handleChange}
          required
          min={0}
          step={1}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="50.00"
        />
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700"
        >
          Experience (Years)
        </label>
        <input
          type="number"
          name="experience"
          id="experience"
          value={profile.experience}
          onChange={handleChange}
          required
          min={0}
          step={1}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="5"
        />
      </div>

      <div>
        <label
          htmlFor="ratings"
          className="block text-sm font-medium text-gray-700"
        >
          Ratings (1-5)
        </label>
        <input
          type="number"
          name="ratings"
          id="ratings"
          value={profile.ratings}
          onChange={handleChange}
          required
          min={1}
          max={5}
          step={1}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="4.5"
        />
      </div>

      {message && (
        <div
          className={`text-center ${
            message.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Profile'}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
