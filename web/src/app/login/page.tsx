"use client";

import { useState } from "react";
import { authClient } from "@/utils/auth-client";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await authClient.signIn.email({ email, password });

    console.log(authClient);

    if (error) {
      console.error("Login error:", error);
      return;
    }

    console.log("Login successful:", data);
  };

  const handleGoogleLogin = async () => {
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

      {/* login form */}
      <div className="w-full flex flex-col gap-y-6">
        {/* title */}
        <div className="flex flex-col items-start gap-2 pt-6">
          <h1 className="text-2xl text-gray-900 font-bold">Welcome Back👋</h1>
          <p className="text-sm text-gray-900 font-semibold max-w-xs">
            Today is a new day. It`s your day. You shape it. Sign in to start
            managing your projects.
          </p>
        </div>

        {/* login form fields */}
        <div className="flex flex-col gap-4">
          {/* email field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-gray-900 font-bold">Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
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

        {/* forgot password */}
        <div className="-mt-2 flex justify-end">
          <div className="text-sm text-blue-900 font-semibold hover:underline cursor-pointer">
            Forgot Password?
          </div>
        </div>

        {/* login button */}
        <button
          onClick={handleLogin}
          className="-mt-2 w-full h-10 bg-gray-900 rounded-xl text-white tracking-wide flex items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          Login
        </button>

        {/* OAuth */}
        <div className="flex items-center gap-4 pt-2">
          <div className="w-full border-t border-t-gray-300"></div>
          <span className="whitespace-nowrap text-sm text-gray-900">
            Or login with
          </span>
          <div className="w-full border-t border-t-gray-300"></div>
        </div>

        <div className="flex justify-between gap-x-4">
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
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

        {/* sign up */}
        <div className="flex justify-center gap-2">
          <p className="text-md text-black">Don`t have an account?</p>
          <div className="text-md text-blue-700 hover:underline cursor-pointer">
            Sign up
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
