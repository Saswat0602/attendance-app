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
