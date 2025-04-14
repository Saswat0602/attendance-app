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
