'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80"
          alt="Office background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center text-white px-6"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-md">
          XXX Attendance
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-xl mx-auto mb-8 drop-shadow-sm">
          Seamlessly track, manage, and audit your team's time entries with clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/signin">
            <Button size="lg" variant="secondary">
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
