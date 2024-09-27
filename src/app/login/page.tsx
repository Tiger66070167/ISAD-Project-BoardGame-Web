'use client'

import React from "react";
import Link from "next/link";
import { checkLoginAction } from "../../../utils/core/Account/serverActionUser";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';


class loginPage extends React.Component {
  state = {
    error: false,
    loading: false  
  };

  constructor(prop: any) { super(prop); }
  
  setError(value: boolean) {
    this.setState({error: value});
  }

  setLoading(value: boolean) {
    this.setState({loading: value});
  }

  async compareLogin() {

    this.setError(false);
    this.setLoading(true);

    let user: any = document.querySelector('#email')!;
    let pass: any = document.querySelector("#password")!;

    if (!user.value && !pass.value) { this.setError(true); } 
    else {
      if (!await checkLoginAction(user.value, pass.value)) { this.setError(true) }
    }
    user.value = '';
    pass.value = '';
    this.setLoading(false);
  }

  render() {
    let error = this.state.error;
    let loading = this.state.loading;
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">

        {/* Background */}
        <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28 laptop:pb-12 desktop:pb-22">
          <div className="shadow-md rounded-lg bg-[#303030] flex flex-col pt-8 w-96 desktop:w-[500px] h-auto pb-20">

            {/* Head */}
            <div>
              <h1 className="laptop:text-3xl desktop:text-4xl laptop:my-5 desktop:my-12 font-black text-[--primary-color] flex justify-center items-center">
                Login
              </h1>
            </div>

            {/* if login fail */}
            {error && <p className="flex justify-center items-center py-5 bg-[--incorrect-color] mx-8 rounded-sm">Email or password incorrect</p>}

            {/* Input Form */}
            <form className="w-full px-10 laptop:my-5 desktop:my-12" onSubmit={e => {
              e.preventDefault();
              this.compareLogin();
            }}>
              <div className="pb-5">
                <label className="laptop:text-xl desktop:text-2xl font-semibold">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
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
                  id="password"
                  className="text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center items-center pt-5 w-full laptop:text-xl desktop:text-2xl">
                <button className="bg-[--primary-color] w-full shadow-md rounded-full font-semibold py-3 text-black disabled:opacity-50" disabled={loading}>
                  {!loading ? "Login" : "Loading..."}
                </button>
              </div>

              {/* Link Register */}
              <div className="flex justify-center items-center pt-2 laptop:text-sm desktop:text-lg" >
                <p>
                  Don't have an account?{" "}
                  <span className="text-[--primary-color] font-black">
                    <Link href="/register">Register</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
  

export default loginPage;
