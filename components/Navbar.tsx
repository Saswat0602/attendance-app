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
