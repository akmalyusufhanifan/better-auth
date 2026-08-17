"use client";

import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { UAParser } from "ua-parser-js";

// export default function ProfilePage() {

//   return (
//     <div className="min-h-screen bg-slate-100 py-6 px-6">
//       <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="relative bg-blue-400 px-8 py-10">

//             <p className="text-blue-100">Full Stack Web Developer</p>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="space-y-6 p-8">
//           {/* Name */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-black">
//               Full Name
//             </label>

//             <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-black">
//               {session.user.name}
//             </div>
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-black">
//               Phone Number
//             </label>

//             <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-black">
//               0812-3456-7890
//             </div>
//           </div>

//           {/* Bio */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-black">
//               Bio
//             </label>

//             <div className="min-h-32 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 leading-7 text-black">
//               user bio goes here
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const userAgent = session?.session.userAgent ?? "";
  const parser = new UAParser(userAgent);

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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 gap-y-6">
      {/* header */}
      <div className="w-full shadow-sm border border-gray-200 rounded-xs py-4 flex flex-col items-center gap-y-2">
        {/* photo */}
        <div className="flex flex-col items-center">
          <div className="flex h-18 w-18 items-center justify-center rounded-lg bg-[#64748B] text-3xl font-bold text-white">
            AY
          </div>
        </div>

        {/* name */}
        <h1 className="text-xl font-semibold text-[#0F172A]">
          {session.user.name}
        </h1>

        {/* job title (dummy) */}
        <p className="text-[#0F172A] tracking-wide text-sm">
          Software Engineer
        </p>
      </div>

      {/* content */}
      <div className="w-full shadow-sm border border-gray-200 rounded-xs p-4 flex flex-col items-start gap-y-2">
        <h2 className="text-sm text-[#0F172A] font-bold font-mono">
          CONTACT INFORMATION
        </h2>

        {/* email */}
        <div className="flex flex-col gap-y-2">
          <label className="text-xs text-[#0F172A] font-semibold font-mono">
            EMAIL
          </label>
          <div className="text-sm text-[#0F172A]">{session.user.email}</div>
        </div>

        <div className="w-full border-b border-gray-300"></div>

        {/* phone */}
        <div className="flex flex-col gap-y-2">
          <label className="text-xs text-[#0F172A] font-semibold font-mono">
            PHONE
          </label>
          <div className="text-sm text-[#0F172A]">{"0812-3456-7890"}</div>
        </div>

        <div className="w-full border-b border-gray-300"></div>

        {/* location */}
        <div className="flex flex-col gap-y-2">
          <label className="text-xs text-[#0F172A] font-semibold font-mono">
            LOCATION
          </label>
          <div className="text-sm text-[#0F172A]">Jakarta, Indonesia</div>
        </div>
      </div>

      {/* session */}
      <div className="w-full shadow-sm border border-gray-200 rounded-xs p-4 flex flex-col items-start gap-y-2">
        <h2 className="text-sm text-[#0F172A] font-bold font-mono">
          ACTIVE SESSIONS
        </h2>

        <div className="flex flex-col items-start gap-y-1">
          <div className="text-sm text-[#0F172A] font-semibold">
            {parser.getDevice().model} - {parser.getBrowser().name}
          </div>

          <div className="text-xs text-[#0F172A]">Jakarta, Indonesia</div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex flex-col gap-4 pt-4 w-full">
        <button className="rounded-xs bg-[#0F172A] h-10 font-mono font-light text-sm text-white transition hover:bg-[#0F172A]/90 hover:cursor-pointer">
          Edit Profile
        </button>

        <button
          onClick={handleLogout}
          className="rounded-xs border border-red-500 h-10 font-mono text-sm text-red-500 transition hover:bg-red-100 hover:cursor-pointer"
        >
          Sign Out
        </button>
      </div>

      {/* copyright */}
      <div className="mt-auto text-xs text-[#0F172A]">
        © 2026 All rights reserved.
      </div>
    </div>
  );
}
