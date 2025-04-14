#!/bin/bash

# Create folder structure
mkdir -p app/auth/signin
mkdir -p app/auth/signup
mkdir -p app/dashboard/time-entries
mkdir -p components
mkdir -p sections
mkdir -p lib

# Create files with boilerplate

# Layout
cat > app/layout.tsx <<'EOF'
import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Attendance App',
  description: 'Built with Next.js + ShadCN UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen')}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
EOF

# Landing Page
cat > app/page.tsx <<'EOF'
export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to GMI Attendance</h1>
      <p className="text-gray-600">Track and audit time entries efficiently</p>
    </div>
  )
}
EOF

# Sign In Page
cat > app/auth/signin/page.tsx <<'EOF'
'use client'

import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/dashboard/time-entries')
  }

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <input className="w-full border p-2 rounded" placeholder="Email" />
      <input className="w-full border p-2 rounded" placeholder="Password" type="password" />
      <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  )
}
EOF

# Sign Up Page
cat > app/auth/signup/page.tsx <<'EOF'
export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <input className="w-full border p-2 rounded" placeholder="Email" />
      <input className="w-full border p-2 rounded" placeholder="Password" type="password" />
      <button className="w-full bg-green-600 text-white p-2 rounded">Create Account</button>
    </div>
  )
}
EOF

# Time Entries Page
cat > app/dashboard/time-entries/page.tsx <<'EOF'
import { TimeEntriesTable } from '@/sections/TimeEntriesTable'

export default function TimeEntriesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Time Entries</h1>
      <TimeEntriesTable />
    </div>
  )
}
EOF

# Navbar
cat > components/Navbar.tsx <<'EOF'
'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <Link href="/" className="text-lg font-semibold">GMI Attendance</Link>
      <div className="space-x-4">
        <Link href="/auth/signin">Sign In</Link>
        <Link href="/auth/signup">Sign Up</Link>
      </div>
    </nav>
  )
}
EOF

# Time Entries Table
cat > sections/TimeEntriesTable.tsx <<'EOF'
'use client'

import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TimeEntriesTable() {
  const data = [
    { id: 1, name: 'Carlos Rivera', status: 'Needs Review', date: '11/01/24' },
    { id: 2, name: 'Martha Jimenez', status: 'Auto-Approved', date: '11/01/24' },
  ]

  return (
    <ScrollArea className="rounded border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry.id} className="border-t">
              <td className="p-2">{entry.id}</td>
              <td>{entry.name}</td>
              <td><Badge>{entry.status}</Badge></td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  )
}
EOF

# Google Map
cat > components/Map.tsx <<'EOF'
'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const center = { lat: 37.7749, lng: -122.4194 }

export function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}
EOF

# Utils (used by layout)
cat > lib/utils.ts <<'EOF'
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
EOF

# Env file
cat > .env.local <<'EOF'
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key_here
EOF

echo "✅ Files created and boilerplate code added!"
