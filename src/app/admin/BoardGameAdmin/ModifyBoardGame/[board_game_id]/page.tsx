"use client";

import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/components/utilities/Load";
import { boardGame } from "../../../../../../utils/typeStorage/boardType";
import boardFetcher from "../../../../../../utils/core/fetcher/tableFetcher/boardFetcher";

export default class createBoardGame extends Component<{params: {board_game_id: number}}, {data: boardGame | null ,loading: boolean}> {
  constructor(props: {params: {board_game_id: number}}) {
    super(props);

    this.state = {
      data: null,
      loading: false
    }

  }

  setLoading(value: boolean) {
    this.setState({loading: value});
  }
  setData(value: boardGame) {
    this.setState({data: value});
  }

  componentDidMount(): void {
    this.setup();
  }

  public async setup() {
    this.setLoading(true);

    let board: boardFetcher = new boardFetcher();
    this.setData(await board.getBoard(this.props.params.board_game_id));

    this.setLoading(false)
  }

  public handleChange() {
    this.setLoading(true);

    

    
  }

  render() {
    return (
      <>
      {(this.state.loading) && <Loading />}
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28  desktop:pb-22">
          <div className="shadow-md rounded-lg bg-[#303030] flex flex-col pt-8 w-96 desktop:w-[500px] h-auto pb-12">

            <div className="tablet:text-2xl laptop:text-3xl desktop:text-4xl tablet:mt-2 laptop:mt-5 desktop:mt-7 font-black text-[--primary-color] flex justify-center items-center mb-5">
              Modify Board Game
            </div>

            <form className="flex flex-col items-center gap-y-10">
              {/* Name */}
              <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16">
                <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                  Board Game Name
                </label>
                <input
                  type="text"
                  defaultValue={this.state.data?.name}
                  placeholder="Enter board game name"
                  className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                />
              </div>

              {/* Image */}
              <div className="">
                <img
                  className="object-scale-down h-48 w-80 rounded-2xl overflow-hidden shadow-md"
                  src={this.state.data?.picture || "/images/boardGamePicture/boardgame.jpeg"}
                  alt=""
                />
                <div className="mt-5 flex flex-col justify-center items-center">
                  <label className="laptop:text-xl desktop:text-2xl font-semibold">
                    Choose Image
                  </label>
                  <input type="file" className="w-56" />
                </div>
              </div>

              {/* Button */}
              <div className="flex gap-x-5">
                <Link href="/admin/BoardGameAdmin">
                  <button
                    className="tablet:px-3 tablet:py-1
                    laptop:px-3 laptop:py-1
                    desktop:px-6 desktop:py-2
                    bg-[--incorrect-color] rounded
                    hover:bg-[--hover-incorrect-color] duration-300"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  className="tablet:px-3 tablet:py-1
                  laptop:px-3 laptop:py-1
                  desktop:px-5 desktop:py-2
                  bg-[--secondary-color] rounded
                  hover:bg-[--passed-color] duration-300"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}
