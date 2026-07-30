"use client";

import { useState } from "react";
import { authClient } from "@/utils/auth-client";

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

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center py-6 px-6">
      {/* picture */}
      <div className="w-[342] h-[180] bg-gray-400 rounded-2xl"></div>

      {/* login form */}
      <div className="w-full flex flex-col gap-y-6">
        {/* title */}
        <div className="flex flex-col items-start gap-2 pt-6">
          <h1 className="text-xl text-gray-900 font-semibold">
            Welcome Back✋
          </h1>
          <p className="text-sm text-gray-700 max-w-xs">
            Today is a new day. It`s your day. You shape it. Sign in to start
            managing your projects.
          </p>
        </div>

        {/* login form fields */}
        <div className="flex flex-col gap-4">
          {/* email field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-black">Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="w-full h-10 rounded-xl text-black bg-gray-300 px-3 outline-none"
            />
          </div>

          {/* password field */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-black">Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full h-10 rounded-xl text-black bg-gray-300 px-3 outline-none"
            />
          </div>
        </div>

        {/* forgot password */}
        <div className="flex justify-end">
          <div className="text-sm text-blue-500 hover:underline cursor-pointer">
            Forgot password?
          </div>
        </div>

        {/* login button */}
        <button
          onClick={handleLogin}
          className="w-full h-10 bg-blue-500 rounded-xl text-white flex items-center justify-center cursor-pointer hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
