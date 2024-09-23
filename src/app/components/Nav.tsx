"use client"

import React from "react";
import Link from "next/link";

function clickHam() {
  let event = document.getElementById("menu");
  (event?.className === 'hidden absolute px-20 pb-5') ? event.className += ' menu-active' : event!.className = 'hidden absolute px-20 pb-5';
};

function clickMenu() {
  let event = document.getElementById("menu");
  (event?.className === 'hidden absolute px-20 pb-5 menu-active') ? event.className = 'hidden absolute px-20 pb-5' : 0 ;
}

function Nav() {
  return (
    <nav>
      <div
        id="navbar-container"
        className="w-full h-14 px-20
      tablet:flex
      laptop:grid laptop:grid-cols-3
      justify-items items-center
      bg-[#292929] text-white font-semibold
      fixed
      top-0 left-0 z-10 "
      >
        {/* Left */}
        <div className="place-content-start laptop:text-base tablet:hidden desktop:text-lg laptop:flex">
          LOGO
        </div>

        {/* Center Laptop and Desktop */}
        <ul
          className="flex items-center justify-center
        teblet:text-base tablet:hidden
        laptop:space-x-6 laptop:text-base laptop:flex
        desktop:space-x-9 desktop:text-lg"
        >
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
        <div className="justify-self-end tablet:hidden laptop:flex">
          <button
            className="rounded bg-[--primary-color]
            tablet:px-2 tablet:text-base
            laptop:px-4 laptop:text-base
            desktop:px-6 desktop:text-lg
            transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
            type="button"
          >
            <Link href="/login">Sign in</Link>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div
          id="ham-bar"
          className="tablet:flex
        laptop:hidden
        tablet:justify-between
        justify-items items-center
        "
        >
          <div className="place-content-start laptop:text-base desktop:text-3xl">
            LOGO
          </div>
          <div className="flex items-start">
            <ul id="menu" className="hidden absolute px-20 pb-5">
              <div className="border-b pb-1 mb-2">
                <button
                className="rounded bg-[--primary-color]
                tablet:px-2 tablet:text-base
                laptop:px-4 laptop:text-base
                desktop:px-6 desktop:py-1 desktop:text-3xl
                transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
                type="button"
                >
                  <Link href="/login" onClick={clickMenu}>Sign in</Link>
                </button>
              </div>
              <li className="hover:text-[--primary-color] transition hover:delay-50">
                <Link href="/" onClick={clickMenu}>Home</Link>
              </li>
              <li className="hover:text-[--primary-color] transition hover:delay-50">
                <Link href="/booking" onClick={clickMenu}>Booking</Link>
              </li>
              <li className="hover:text-[--primary-color] transition hover:delay-50">
              <Link href="/status" onClick={clickMenu}>Status</Link>
              </li>
              <li className="hover:text-[--primary-color] transition hover:delay-50">
                <Link href="/food" onClick={clickMenu}>Food</Link>
              </li>
            </ul>
          </div>
          <button id="ham-button" className="tablet:text-2xl" onClick={clickHam}>☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
