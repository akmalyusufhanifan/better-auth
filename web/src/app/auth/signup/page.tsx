"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/utils/auth-client";
import { RiContactsBook3Line } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSignup = async () => {
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push("/profile");
        },
        onError: (ctx) => {
          console.error(ctx.error);
        },
      },
    );

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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 gap-y-6">
      <div className="bg-[#F8FAFC] w-full shadow-sm border border-gray-200 rounded-sm flex flex-col gap-y-6 px-4 py-6">
        {/* title */}
        <div className="w-full flex flex-col items-center gap-y-2">
          <RiContactsBook3Line className="text-3xl text-[#0F172A]" />
          <h1 className="text-xl text-[#0F172A] font-bold">
            Create an account
          </h1>
          <p className="text-xs text-[#0F172A]">
            Join BetterAuth Kit to secure your apps.
          </p>
        </div>

        {/* signup form fields */}
        <div className="flex flex-col gap-3">
          {/* name field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs text-[#0F172A] font-mono">FULL NAME</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="text-xs w-full h-8 rounded-xs text-[#0F172A] border border-gray-300 px-3 outline-none placeholder:text-gray-600"
            />
          </div>

          {/* email field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs text-[#0F172A] font-mono">EMAIL</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@email.com"
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

          {/* confirm password field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs text-[#0F172A] font-mono">
              CONFIRM PASSWORD
            </h2>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError("");
              }}
              placeholder="Confirm your password"
              className={`text-xs w-full h-8 rounded-xs text-[#0F172A] border px-3 outline-none placeholder:text-gray-600 ${
                confirmPasswordError ? "border-red-500" : "border-gray-300"
              }`}
            />

            {confirmPasswordError && (
              <p className="mt-1 text-sm text-red-500">
                {confirmPasswordError}
              </p>
            )}
          </div>

          {/* signup button */}
          <button
            onClick={handleSignup}
            className="w-full mt-2 h-8 bg-[#0F172A] rounded-xs text-white text-xs font-mono font-extralight tracking-wide flex items-center justify-center cursor-pointer hover:bg-[#0F172A]/90 transition duration-200"
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="w-full border-t border-gray-300"></div>
          <span className="whitespace-nowrap text-xs text-[#0F172A] font-mono">
            OR CONTINUE WITH
          </span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* OAuth Options */}
        <div className="flex flex-col gap-y-4">
          {/* Github */}
          <button
            onClick={handleGoogleAuth} // Replace with actual GitHub auth handler
            className="w-full h-8 border border-gray-300 rounded-xs flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer"
          >
            <CiLogin className="text-xl text-[#0F172A]" />
            <h3 className="text-xs text-[#0F172A] font-mono font-semibold">
              Github
            </h3>
          </button>

          {/* Google */}
          <button
            onClick={handleGoogleAuth}
            className="w-full h-8 border border-gray-300 rounded-xs flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer"
          >
            <SlSocialGoogle className="text-md text-[#0F172A]" />
            <h3 className="text-xs text-[#0F172A] font-mono font-semibold">
              Google
            </h3>
          </button>
        </div>

        <div className="w-full flex justify-center">
          <p className="text-xs text-[#0F172A]">
            Already have an account?{" "}
            <a href="/auth/signin" className="text-[#4F46E5] hover:underline">
              Sign in
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
