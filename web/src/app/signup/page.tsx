"use client";

import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/utils/auth-client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    console.log(authClient);

    if (error) {
      console.error("Signup error:", error);
      return;
    }

    console.log("Signup successful:", data);
  };

  const handleGoogleAuth = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:8000/api/auth/callback/google",
    });

    if (error) {
      console.error("Google login error:", error);
      return;
    }

    console.log("Google login successful:", data);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center py-6 px-6">
      {/* picture */}
      <div className="relative w-[342] h-[180]">
        <Image
          src="/welcome-picture.jpg"
          alt="Welcome Picture"
          fill
          loading="eager"
          className="object-cover rounded-2xl"
        />
      </div>

      {/* sign up form */}
      <div className="w-full flex flex-col gap-y-6">
        {/* title */}
        <div className="flex flex-col items-start gap-2 pt-6">
          <h1 className="text-2xl text-gray-900 font-bold">Welcome👋</h1>
          <p className="text-sm text-gray-900 font-semibold max-w-xs">
            Today is a new day. It`s your day. You shape it. Sign up to start
            managing your projects.
          </p>
        </div>

        {/* signup form fields */}
        <div className="flex flex-col gap-4">
          {/* name field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-gray-900 font-bold">Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="text-sm w-full h-10 rounded-lg text-black bg-gray-200 border border-gray-400 px-3 outline-none"
            />
          </div>

          {/* email field */}
          <div className="-mt-2 flex flex-col gap-2">
            <h2 className="text-sm text-gray-900 font-bold">Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@email.com"
              className="text-sm w-full h-10 rounded-lg text-black bg-gray-200 border border-gray-400 px-3 outline-none"
            />
          </div>

          {/* password field */}
          <div className="-mt-2 flex flex-col gap-2">
            <h2 className="text-sm text-gray-900 font-bold">Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="text-sm w-full h-10 rounded-lg text-black bg-gray-200 border border-gray-400 px-3 outline-none"
            />
          </div>
        </div>

        {/* signup button */}
        <button
          onClick={handleSignup}
          className="w-full h-10 bg-gray-900 rounded-xl text-white tracking-wide flex items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          Sign Up
        </button>

        {/* OAuth */}
        <div className="flex items-center gap-4 pt-2">
          <div className="w-full border-t border-t-gray-300"></div>
          <span className="whitespace-nowrap text-sm text-gray-900">
            Or sign up with
          </span>
          <div className="w-full border-t border-t-gray-300"></div>
        </div>

        <div className="flex justify-between gap-x-4">
          {/* Google */}
          <button
            onClick={handleGoogleAuth}
            className="bg-gray-200 w-full h-10 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-300 cursor-pointer"
          >
            <Image
              src="/google-logo.png"
              alt="Google Logo"
              width={24}
              height={24}
            />
            <h3 className="text-md text-black font-semibold">Google</h3>
          </button>

          {/* UBAH MENJADI BUTTON BERFUNGSI */}
          {/* Facebook */}
          <div className="bg-gray-200 w-full h-10 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-300 cursor-pointer">
            <Image
              src="/facebook-logo.png"
              alt="Facebook Logo"
              width={24}
              height={24}
            />
            <h3 className="text-md text-black font-semibold">Facebook</h3>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-auto text-sm text-gray-500">
        © 2026 All rights reserved.
      </div>
    </div>
  );
}
