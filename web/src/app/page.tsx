import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-slate-100 min-h-screen flex flex-col items-center py-6 px-6">
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

      <div className="w-full flex flex-col gap-y-6">
        {/* title */}
        <div className="flex flex-col items-start gap-2 pt-6">
          <h1 className="text-2xl text-gray-900 font-bold">Welcome👋</h1>
          <p className="text-sm text-gray-900 font-semibold max-w-xs">
            Today is a new day. It`s your day. You shape it. Sign up or Login to
            start managing your projects.
          </p>
        </div>

        {/* REDESIGN BUTTON */}
        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/auth/signin"
            className="w-full rounded-lg bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            Sign In
          </Link>

          <Link
            href="/auth/signup"
            className="w-full rounded-lg border border-slate-300 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-auto text-sm text-gray-500">
        © 2026 All rights reserved.
      </div>
    </main>
  );
}
