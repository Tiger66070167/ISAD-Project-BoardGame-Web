"use client";

import React from "react";
import AdminCard from "../../components/BoardGame/adminCard";
import Link from "next/link";
import boardFetcher from "../../../../utils/core/fetcher/tableFetcher/boardFetcher";
import { boardGame } from "../../../../utils/typeStorage/boardType";

interface BoardGamePageState {
  allBoard: Array<boardGame>;
  output: Array<boardGame>;
}

export default class boardGameAdminPage extends React.Component<
  {},
  BoardGamePageState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      allBoard: [],
      output: [],
    };
  }

  setAllBoardGame(value: Array<boardGame>) {
    this.setState({ allBoard: value });
  }

  setOutput(value: Array<boardGame>) {
    this.setState({output: value})
  }

  async componentDidMount() {
    let food = new boardFetcher();
    let tmp = await food.getAllBoard();
    this.setAllBoardGame(tmp);
    this.setOutput(tmp);
  }

  handleSearch() {
    let search: HTMLInputElement = document.querySelector(".search")!;
    let word = search.value;
    this.setOutput(this.state.allBoard.filter((board) => board.name?.toLowerCase().includes(word.toLowerCase())));
  }

  render() {
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        {/* Menu on top of page */}
        <div className="grid grid-cols-3 pt-24 justify-center items-center">
          {/* Left */}
          <div className="flex laptop:justify-center laptop:mr-0 desktop:justify-end desktop:mr-10">
            <h1 className="text-4xl text-[#5865F2] font-black tablet:text-xl laptop:text-3xl desktop:text-4xl">
              Board game list
            </h1>
          </div>

          {/* Center */}
          <div className="flex justify-center">
            <button
              className="bg-[--primary-color]
              tablet:px-2 tablet:text-sm
              laptop:px-4 laptop:text-base
              desktop:px-6 desktop:text-lg
              py-1
              rounded
              hover:bg-[--hover-primary-color] duration-300"
            >
              <Link href="/admin/BoardGameAdmin/CreateBoardGame">
                Add Board Game
              </Link>
            </button>
          </div>

          {/* Right */}
          <div className="flex laptop:justify-center laptop:ml-0 desktop:justify-start desktop:ml-7">
            <input
              onChange={this.handleSearch.bind(this)}
              type="text"
              placeholder="search board game"
              className="search text-[#000000]
              mt-1 px-3 py-2 
              border-b shadow-sm border-slate-300 rounded-lg focus:outline-none
              tablet:w-40 sm:w-72 w-96
              sm:text-sm"
            />
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto mt-3 min-w-[200px] max-w-[1400px] lg:block">
          <div
            className="grid justify-center items-center align-baseline
            xl:grid-cols-4 xl:px-20
            md:grid-cols-3
            sm:grid-cols-2
            gap-5
            h-full w-full
            bg-[#171717]"
          >
            {this.state.output.map((value) => {
              return (
                <div className="flex justify-center items-center">
                  <AdminCard key={value.board_game_id} data={value} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
