"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/utils/auth-client";
import { RiContactsBook3Line } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSignin = async () => {
    const { data, error } = await authClient.signIn.email(
      { email, password },
      {
        onSuccess: () => {
          router.push("/profile");
        },
        onError: (ctx) => {
          console.error(ctx.error);
        },
      },
    );

    console.log(authClient);

    if (error) {
      console.error("Login error:", error);
      return;
    }

    console.log("Login successful:", data);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 gap-y-6">
      <div className="bg-[#F8FAFC] w-full shadow-sm border border-gray-200 rounded-sm flex flex-col gap-y-6 px-4 py-6">
        {/* title */}
        <div className="w-full flex flex-col items-center gap-y-2">
          <RiContactsBook3Line className="text-3xl text-[#0F172A]" />
          <h1 className="text-xl text-[#0F172A] font-bold">Sign In</h1>
          <p className="text-xs text-[#0F172A]">
            Sign in to your BetterAuth Kit account
          </p>
        </div>

        {/* OAuth Options */}
        <div className="flex flex-col gap-y-4">
          {/* Google */}
          <button
            onClick={handleGoogleAuth}
            className="w-full h-8 border border-gray-300 rounded-xs flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer"
          >
            <SlSocialGoogle className="text-md text-[#0F172A]" />
            <h3 className="text-xs text-[#0F172A] font-mono font-semibold">
              Countinue with Google
            </h3>
          </button>

          {/* Github */}
          <button
            onClick={handleGoogleAuth} // Replace with actual GitHub auth handler
            className="w-full h-8 border border-gray-300 rounded-xs flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer"
          >
            <CiLogin className="text-xl text-[#0F172A]" />
            <h3 className="text-xs text-[#0F172A] font-mono font-semibold">
              Countinue with GitHub
            </h3>
          </button>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="w-full border-t border-gray-300"></div>
          <span className="whitespace-nowrap text-xs text-[#0F172A] font-mono">
            OR
          </span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* signin form fields */}
        <div className="flex flex-col gap-3">
          {/* email field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs text-[#0F172A] font-mono">EMAIL</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="text-xs w-full h-8 rounded-xs text-[#0F172A] border border-gray-300 px-3 outline-none placeholder:text-gray-600"
            />
          </div>

          {/* password field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs text-[#0F172A] font-mono">PASSWORD</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="text-xs w-full h-8 rounded-xs text-[#0F172A] border border-gray-300 px-3 outline-none placeholder:text-gray-600"
            />
          </div>

          {/* signin button */}
          <button
            onClick={handleSignin}
            className="w-full mt-2 h-8 bg-[#0F172A] rounded-xs text-white text-xs font-mono font-extralight tracking-wide flex items-center justify-center cursor-pointer hover:bg-[#0F172A]/90 transition duration-200"
          >
            Sign In
          </button>
        </div>

        <div className="w-full flex justify-center">
          <p className="text-xs text-[#0F172A]">
            Don`t have an account?{" "}
            <a href="/auth/signup" className="text-[#4F46E5] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-auto text-xs text-[#0F172A]">
        © 2026 All rights reserved.
      </div>
    </div>
  );
}
