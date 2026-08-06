"use client";

import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <p>Loading...</p>;
  if (!session) return <p>Not logged in</p>;

  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
        onError: (ctx) => {
          console.error(ctx.error);
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-6 px-6">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-blue-400 px-8 py-10">
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-400">
              AY
            </div>

            <h1 className="mt-4 text-3xl font-bold text-white">
              {session.user.name}
            </h1>

            <p className="text-blue-100">Full Stack Web Developer</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-8">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">
              Full Name
            </label>

            <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-black">
              {session.user.name}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">
              Email
            </label>

            <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-black">
              {session.user.email}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">
              Phone Number
            </label>

            <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-black">
              0812-3456-7890
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">
              Bio
            </label>

            <div className="min-h-32 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 leading-7 text-black">
              user bio goes here
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <button className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50">
              Edit Profile
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 hover:cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
