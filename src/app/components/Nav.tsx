import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <header className="w-full grid grid-cols-3 justify-items items-center laptop:py-4 desktop:py-5 bg-[#292929] text-white font-semibold fixed top-0 left-0 z-10 ">
      {/* Left */}
      <div className="place-content-start pl-20 laptop:text-base desktop:text-3xl">
        LOGO
      </div>

      {/* Center */}
      <ul className="flex items-center justify-center laptop:space-x-6 desktop:space-x-12 laptop:text-base desktop:text-3xl">
        <li className="hover:text-[--primary-color] hover:scale-110 transition hover:delay-50">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-[--primary-color] hover:scale-110 transition hover:delay-50">
          <Link href="/booking">Booking</Link>
        </li>
        <li className="hover:text-[--primary-color] hover:scale-110 transition hover:delay-50">
          <Link href="/status">Status</Link>
        </li>
        <li className="hover:text-[--primary-color] hover:scale-110 transition hover:delay-50">
          <Link href="/food">Food</Link>
        </li>
      </ul>

      {/* Right */}
      <div className="pr-20 justify-self-end">
        <button
          className="rounded bg-[--primary-color] laptop:px-4 desktop:px-6 desktop:py-1 laptop:text-base desktop:text-3xl transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
          type="button"
        >
          <Link href="/login">Sign in</Link>
        </button>
      </div>
    </header>
  );
}

export default Nav;
