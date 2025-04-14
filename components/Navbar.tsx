'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-20 flex justify-between items-center backdrop-blur bg-white/10 text-white">
      <Link href="/" className="text-2xl font-extrabold tracking-wide">
        XXX ATTENDANCE
      </Link>
      <div className="flex gap-6 font-medium text-lg">
        <Link href="/auth/signin" className="hover:underline">
          Sign In
        </Link>
        <Link href="/auth/signup" className="hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
