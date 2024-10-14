"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import { userInfo } from "../../../utils/typeStorage/accountType";
import accountFetcher from "../../../utils/core/fetcher/tableFetcher/accountFetcher";
import Loading from "./utilities/Load";

export default class Nav extends React.Component<{}, { data: userInfo | null, loading: boolean }> {

  constructor(props: {}) {
    super(props)

    this.state = {
      data: null,
      loading: false
    }
  }

  // state change
  setData(value: userInfo) { this.setState({ data: value }); }
  setLoading(value: boolean) {this.setState({loading: value});}

  async componentDidMount() {
    this.setLoading(true);

    let account: accountFetcher = new accountFetcher();
    let info = await account.checkToken();
    if (info) {
      this.setData(info);
    }

    this.setLoading(false);
  }

  private clickHam() {
    let event = document.getElementById("menu");
    event?.className === "hidden absolute px-20 pb-5"
      ? (event.className += " menu-active")
      : (event!.className = "hidden absolute px-20 pb-5");
  }

  private clickMenu() {
    let event = document.getElementById("menu");
    event?.className === "hidden absolute px-20 pb-5 menu-active"
      ? (event.className = "hidden absolute px-20 pb-5")
      : 0;
  }

  render() {

    let clickHam = this.clickHam;
    let clickMenu = this.clickMenu;

    return (
      <>
        {this.state.loading && <Loading />}
        <nav>
          <div
            id="navbar-container"
            className="w-full h-14 px-20
      flex justify-between items-center
      bg-[#292929] text-white font-semibold
      fixed
      top-0 left-0 z-10 "
          >
            {/* Left */}
            <Image src={logo} alt="Logo" width={65} height={65} />

            {/* Center Laptop and Desktop */}
            <ul
              className="absolute translate-x-1/4 pl-6 items-center justify-center
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
                <Link href="/boardGame">Board Game</Link>
              </li>
              {this.state.data?.role === "admin" && <li className="hover:text-[--primary-color] hover:scale-110 transition hover:delay-50">
                <Link href="/admin/modifyFood">Food</Link>
              </li>}
            </ul>

            {/* Right */}
            <div className="justify-self-end tablet:hidden laptop:flex h-[100%] items-center">
              {(!this.state.data) ? <button
                className="rounded bg-[--primary-color]
              h-[50%]
            tablet:px-2 tablet:text-base
            laptop:px-4 laptop:text-base
            desktop:px-6 desktop:text-lg
            transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
                type="button"
              >
                <Link href="/login">Sign in</Link>
              </button>
                :
                <button
                  className="rounded bg-[--primary-color]
                h-[50%]
            tablet:px-1 tablet:text-base
            laptop:px-3 laptop:text-base
            desktop:px-4 desktop:text-lg
            transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
                >
                  <Link href={`/profile/${this.state.data.user_id}`}>
                    <div className="h-[100%] image flex gap-3 items-center overflow-hidden">
                      <img className="h-[100%] rounded-full" src={this.state.data!.profile} alt="Image" />
                      <p className="text-nowrap">{this.state.data.username}</p>
                    </div>
                  </Link>
                </button>}
            </div>

            {/* Hamburger Menu */}
            <div
              id="ham-bar"
              className="flex
        laptop:hidden
        justify-items items-center
        "
            >
              <div className="flex items-start">
                <ul id="menu" className="hidden absolute px-20 pb-5">
                  <div className="border-b pb-1 mb-2">
                    {(!this.state.data) ? <button
                      className="rounded bg-[--primary-color]
            tablet:px-2 tablet:text-base
            laptop:px-4 laptop:text-base
            desktop:px-6 desktop:text-lg
            transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
                      type="button"
                    >
                      <Link href="/login">Sign in</Link>
                    </button>
                      :
                      <button
                        className="rounded bg-[--primary-color]
            tablet:px-1 tablet:text-base
            laptop:px-3 laptop:text-base
            desktop:px-4 desktop:text-lg
            transition hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
                      >
                        <Link href={`/profile/${this.state.data.user_id}`}>
                          <div className="h-[2rem] image flex gap-3 items-center overflow-hidden">
                            <img className="h-[100%] rounded-full" src={this.state.data!.profile} alt="Image" />
                            <p className="text-nowrap">{this.state.data.username}</p>
                          </div>
                        </Link>
                      </button>}
                  </div>
                  <li className="hover:text-[--primary-color] transition hover:delay-50">
                    <Link href="/" onClick={clickMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-[--primary-color] transition hover:delay-50">
                    <Link href="/booking" onClick={clickMenu}>
                      Booking
                    </Link>
                  </li>
                  <li className="hover:text-[--primary-color] transition hover:delay-50">
                    <Link href="/boardGame" onClick={clickMenu}>
                      Board Game
                    </Link>
                  </li>

                  {this.state.data?.role === "admin" && <li className="hover:text-[--primary-color] transition hover:delay-50">
                    <Link href="/admin/modifyFood" onClick={clickMenu}>
                      Food
                    </Link>
                  </li>}
                </ul>
              </div>
              <button
                id="ham-button"
                className="tablet:text-2xl"
                onClick={clickHam}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
