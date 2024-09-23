'use client'

import React, {useState} from "react";
import Link from "next/link";
import { createUserAction } from "../../../utils/core/users/serverActionUser";

function registerPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function checkCreateUser() {
    
  }

  return (
    <div className="min-h-screen min-w-screen bg-[--neutrals-color]">

      {/* Background */}
      <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28 laptop:pb-12 desktop:pb-22">
        <div className="shadow-md rounded-lg bg-[#303030] flex flex-col pt-8 w-96 desktop:w-[500px] h-auto pb-10">

          {/* Head */}
          <div>
            <h1 className="laptop:text-3xl desktop:text-4xl laptop:my-5 desktop:my-12 font-black text-[--primary-color] flex justify-center items-center">
              Register
            </h1>
          </div>
          
          {/* if error in login */}
          {error && <p className="flex justify-center items-center py-5 bg-[--incorrect-color] mx-8 rounded-sm">{error}</p>}

          {/* Input Form */}
          <form className="w-full px-10 laptop:my-5 desktop:my-12">
            <div className="pb-5">
              <label className="laptop:text-xl desktop:text-2xl font-semibold">
                Username
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your username"
                className="text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
              />
            </div>
            <div className="pb-5">
              <label className="laptop:text-xl desktop:text-2xl font-semibold">
                Email
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
              />
            </div>
            <div className="pb-5">
              <label className="laptop:text-xl desktop:text-2xl font-semibold">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
              />
            </div>
            <div className="pb-5">
              <label className="laptop:text-xl desktop:text-2xl font-semibold">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Comfirm a password"
                className="text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center items-center pt-5 w-full laptop:text-xl desktop:text-2xl">
              <button className="bg-[--primary-color] w-full shadow-md rounded-full font-semibold py-3 text-black">
                Register
              </button>
            </div>

            {/* Link Login */}
            <div className="flex justify-center items-center pt-2 laptop:text-sm  desktop:text-lg">
              <p>
                Already have an account?{" "}
                <span className="text-[--primary-color] font-black">
                  <Link href="/login">Login now</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default registerPage;
