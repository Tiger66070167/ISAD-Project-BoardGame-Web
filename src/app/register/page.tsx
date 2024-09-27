'use client'

import React from "react";
import Link from "next/link";
import { createUserAction } from "../../../utils/core/Account/serverActionUser";

class registerPage extends React.Component {
  state = {
    error: '',
    loading: false,
    success: false
  };

  constructor(prop: any) {
    super(prop);
  }

  setError(value: string) {
    this.setState({error: value});
  }

  setLoading(value: boolean) {
    this.setState({loading: value});
  }

  setSuccess(value: boolean) {
    this.setState({success: value})
  }

  async checkCreateUser() {
    this.setSuccess(false);
    this.setLoading(true);
    this.setError('');

    let user: any = document.querySelector('.username')!;
    let email: any = document.querySelector('.email')!;
    let password: any = document.querySelector('.password')!;
    let checkPass: any = document.querySelector('.confirmPass')!;
    
    if (!user.value || !email.value || !password.value || !checkPass.value) {
      this.setError('Please insert all the information');
      this.setLoading(false);
      return;
    } else if (password.value !== checkPass.value) {
      this.setError('Password do not match');
      this.setLoading(false);
      return;
    } else if (await createUserAction(user.value, email.value, password.value)) {
      this.setSuccess(true);
    } else {
      this.setError("This email is already registered");
    }

    user.value = '';
    email.value = '';
    password.value = '';
    checkPass.value = '';

    this.setLoading(false);
  }

  render(): React.ReactNode {
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
            {this.state.error && <p className="flex justify-center items-center py-5 bg-[--incorrect-color] mx-8 rounded-sm">{this.state.error}</p>}
            {this.state.success && <p className="flex justify-center items-center py-5 bg-[--passed-color] mx-8 rounded-sm">Your reddit account has been successfully created</p>}

            {/* Input Form */}
            <form className="w-full px-10 laptop:my-5 desktop:my-12" onSubmit={e => {
              e.preventDefault();
              this.checkCreateUser();
            }}>
              <div className="pb-5">
                <label className="laptop:text-xl desktop:text-2xl font-semibold">
                  Username
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="username text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
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
                  className="email text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
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
                  className="password text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
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
                  className="confirmPass text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center items-center pt-5 w-full laptop:text-xl desktop:text-2xl">
                <button className="bg-[--primary-color] w-full shadow-md rounded-full font-semibold py-3 text-black disabled:opacity-50" disabled={this.state.loading}>
                  {!this.state.loading ? "Register" : "Loading..."}
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
}

export default registerPage;
