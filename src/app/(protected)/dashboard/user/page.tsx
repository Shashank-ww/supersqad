"use client"

import { useState } from 'react'
import { User, Briefcase, Users, Settings, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mocking profile data for this example
const mockProfiles = [
  { id: 1, name: "John Doe", role: "Developer" },
  { id: 2, name: "Jane Smith", role: "Designer" },
  { id: 3, name: "Mike Johnson", role: "Project Manager" },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const sidebarItems = [
    { name: 'Overview', icon: User, id: 'overview' },
    { name: 'Jobs', icon: Briefcase, id: 'jobs' },
    { name: 'Candidates', icon: Users, id: 'candidates' },
    { name: 'Settings', icon: Settings, id: 'settings' },
    { name: 'Messaging', icon: MessageSquare, id: 'messaging' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-blue-600">Dashboard</h2>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full px-4 py-2 text-left ${
                activeTab === item.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome, Client</h1>

        {/* Simple Profile List */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Profiles</h2>
          <div className="space-y-4">
            {mockProfiles.map((profile) => (
              <div key={profile.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">{profile.name}</h3>
                <p>{profile.role}</p>
                <Button className="mt-2">View Profile</Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}