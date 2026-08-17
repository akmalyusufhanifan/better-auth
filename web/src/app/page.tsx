import Image from "next/image";
// import Link from "next/link";
import { RiContactsBook3Line } from "react-icons/ri";
import {
  MdOutlineVpnKey,
  MdOutlineArchitecture,
  MdOutlineTerminal,
} from "react-icons/md";
import { LuDatabase } from "react-icons/lu";

export default function HomePage() {
  return (
    <div className="min-h-auto bg-[#F8FAFC] flex flex-col items-center justify-center p-4 gap-y-8">
      {/* title */}
      <div className="w-full flex flex-col items-center gap-y-4">
        <RiContactsBook3Line className="text-3xl text-[#0F172A]" />
        <h1 className="text-xl text-[#0F172A] font-bold">
          The developer`s auth foundation
        </h1>
        <p className="text-sm text-[#0F172A] text-center max-w-2xs tracking-wide">
          Secure, minimal, and easy to integrate authentication for modern web
          applications. Start building in minutes.
        </p>
      </div>

      {/* action buttons */}
      <div className="flex flex-col w-full gap-y-4">
        {/* get started */}
        <button className="w-full h-8 bg-[#0F172A] rounded-xs flex items-center justify-center gap-2 hover:bg-[#0F172A]/90 cursor-pointer">
          <h3 className="text-xs text-white font-mono tracking-wide">
            Get started
          </h3>
        </button>

        {/* view on github */}
        <button className="w-full h-8 border border-gray-300 rounded-xs flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer">
          <h3 className="text-xs text-[#0F172A] font-mono font-semibold">
            View on GitHub
          </h3>
        </button>
      </div>

      {/* code image */}
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src="/home-page-code.png"
          alt="Code Example"
          width={600}
          height={400}
          className="object-contain rounded-xs shadow-sm"
        />
      </div>

      {/* sub-title */}
      <div className="w-full flex flex-col items-center gap-y-4 pt-4">
        <h1 className="text-lg text-[#0F172A] font-bold">
          Why choose Better Auth Starter Kit?
        </h1>
        <p className="text-sm text-[#0F172A] text-center tracking-wide">
          Everything you need to build secure,
          <br />
          scalable applications without boilerplate fatigue.
        </p>
      </div>

      {/* description card  */}
      <div className="flex flex-col items-center gap-y-4">
        {/* card 1 */}
        <div className="bg-[#F8FAFC] p-4 rounded-xs border border-gray-300 shadow-sm flex flex-col gap-y-2 hover:scale-102 transition-transform duration-200">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-xs mb-2">
            <MdOutlineVpnKey className="text-2xl text-[#4F46E5]" />
          </div>
          <h2 className="text-md font-semibold text-[#0F172A]">
            Complete Auth Workflow
          </h2>
          <p className="text-sm text-[#0F172A]">
            Pre-built flows for Sign In, Sign Up, Forgot Password, and Email
            Verification. Integrates OAuth providers seamlessly alongside
            credential logins.
          </p>
        </div>

        {/* card 2 */}
        <div className="bg-[#F8FAFC] p-4 rounded-xs border border-gray-300 shadow-sm flex flex-col gap-y-2 hover:scale-102 transition-transform duration-200">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-xs mb-2">
            <MdOutlineArchitecture className="text-2xl text-[#4F46E5]" />
          </div>
          <h2 className="text-md font-semibold text-[#0F172A]">
            Clean Architecture
          </h2>
          <p className="text-sm text-[#0F172A]">
            Separation of concerns built-in. Easily swap out layers or adapt the
            structure to your specific domain needs.
          </p>
        </div>

        {/* card 3 */}
        <div className="bg-[#F8FAFC] p-4 rounded-xs border border-gray-300 shadow-sm flex flex-col gap-y-2 hover:scale-102 transition-transform duration-200">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-xs mb-2">
            <LuDatabase className="text-xl text-[#4F46E5]" />
          </div>
          <h2 className="text-md font-semibold text-[#0F172A]">
            Type-Safe with Prisma
          </h2>
          <p className="text-sm text-[#0F172A]">
            End-to-end type safety. Database schemas automatically generate
            TypeScript interfaces, catching errors at compile time.
          </p>
        </div>

        {/* card 4 */}
        <div className="bg-[#F8FAFC] p-4 rounded-xs border border-gray-300 shadow-sm flex flex-col gap-y-2 hover:scale-102 transition-transform duration-200">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-xs mb-2">
            <MdOutlineTerminal className="text-2xl text-[#4F46E5]" />
          </div>
          <h2 className="text-md font-semibold text-[#0F172A]">
            Developer First
          </h2>
          <p className="text-sm text-[#0F172A]">
            Minimal dependencies, extensive documentation, and sensible defaults
            designed to stay out of your way while providing a robust
            foundation.
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
