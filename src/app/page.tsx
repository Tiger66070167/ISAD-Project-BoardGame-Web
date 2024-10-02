"use client";

import Link from "next/link";
import Image from "next/image";
import image from "../assets/homeSegtion2.png";
import logo from "../assets/Logo.png";
import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* idk why i write these 2 div lol :Win */}
        <div>
          {/* Background */}
          <div className="bg-[url('../assets/boardgame.jpeg')] bg-cover blur-sm brightness-20 min-h-screen min-w-screen place-content-center bg-repeat"></div>

          {/* Center Text */}
          <div
            id="home-text"
            className="flex flex-col justify-center items-center text-[--primary-color]"
          >
            <Image src={logo} alt="Logo" width={500} height={500}/>
            <p className="font-medium tablet:text-base laptop:text-3xl desktop:text-4xl">
              Let's booking your board game from home
            </p>
          </div>

          {/* Segtion 2 of page Home */}
          <div className="min-h-screen min-w-screen bg-[--neutrals-color] flex justify-center items-center">
            <div className="tablet:hidden laptop:grid laptop:grid-cols-2 px-20 gap-10 justify-center items-center">
              <div>
                <h1 className="tablet:text-xl laptop:text-3xl desktop:text-4xl pb-5 font-black">
                  Resvere board game easily via the website
                </h1>
                <p className="tablet:text-lg laptop:text-xl desktop:text-2xl pb-5">
                  Online board game booking service website, easy, does not take
                  long, and can be booked from anywhere. You can also check the
                  status of the board games available in the shop, and order
                  food to eat and play.
                </p>
                <button
                  className="rounded bg-[--primary-color]
              laptop:px-4 laptop:py-4 laptop:text-2xl
              desktop:px-6 desktop:text-4xl
              transition hover:scale-110
              text-black font-black"
                >
                  <Link href="/booking">Booking now!</Link>
                </button>
              </div>

              <div className="grid justify-center items-center">
                <Image className="h-auto w-96" src={image} alt="Board Game" />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <div className="tablet:grid tablet:grid-rows-2 laptop:hidden px-20 gap-10">
                <div className="grid place-items-end">
                  <Image className="h-full w-96" src={image} alt="Board Game" />
                </div>

                <div>
                  <h1 className="tablet:text-xl laptop:text-3xl desktop:text-4xl pb-5 font-black">
                    Resvere board game easily via the website
                  </h1>
                  <p className="tablet:text-sm laptop:text-xl desktop:text-2xl pb-5">
                    Online board game booking service website, easy, does not
                    take long, and can be booked from anywhere. You can also
                    check the status of the board games available in the shop,
                    and order food to eat and play.
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="rounded bg-[--primary-color]
                  tablet:px-3 tablet:text-xl tablet:py-3
                  transition hover:scale-110
                  text-black font-black"
                    >
                      <Link href="/booking">Booking now!</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
