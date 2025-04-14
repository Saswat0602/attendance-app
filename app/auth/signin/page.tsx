'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push('/dashboard/time-entries');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Login */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md py-10 px-12">
          {/* Logo and Title */}
          <div className="flex flex-col items-center mb-10">
            <img src="/api/placeholder/96/96" alt="Company Logo" className="h-20 w-20 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Time</h2>
            <p className="text-gray-500 text-base mt-2">Please sign in to your account</p>
          </div>
          
          {/* Form */}
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                defaultValue="test_admin@texas.com"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="rounded h-4 w-4" />
                <Label htmlFor="remember" className="text-base text-gray-600">Remember Me</Label>
              </div>
              <button type="button" className="text-base text-blue-600 hover:text-blue-800">
                Forgot Password?
              </button>
            </div>
            
            <div className="pt-4">
              <Button
                type="button"
                onClick={handleLogin}
                className="w-full h-12 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-base font-medium"
              >
                Sign In
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-base">
              Having trouble? <a href="#" className="text-blue-600 hover:underline">Contact Support</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/1200/900')" }}>
        <div className="h-full w-full bg-blue-600 opacity-15"></div>
      </div>
    </div>
  );
}