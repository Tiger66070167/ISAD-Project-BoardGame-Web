"use client";

import React from "react";
import Boardcard from "../components/BoardGame/boardcard";
import boardFetcher from "../../../utils/core/Board_Game/boardFetcher";
import { boardGame } from "../../../utils/typeStorage/boardType";

interface BoardGamePageState {
  allBoard: Array<boardGame>
}

export default class statusPage extends React.Component<{}, BoardGamePageState> {

  constructor(props: {}) {
    super(props)
  
    this.state = {
      allBoard: []
    }
  }

  setAllBoardGame(value: Array<boardGame>) {
    this.setState({allBoard: value});
  }

  async componentDidMount() {
      let food = new boardFetcher();
      this.setAllBoardGame(await food.getAllBoard());
  }

  render() {
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="grid grid-cols-2 pt-24 justify-center items-center">
          <div className="flex justify-center">
            <h1 className="text-4xl text-[#5865F2] font-black tablet:text-2xl laptop:text-3xl desktop:text-4xl">
              Board game list
            </h1>
          </div>

          <div className="flex justify-center gap-3">
            <input
              type="text"
              placeholder="search board game"
              className="text-[#000000] mt-1 px-3 py-2 border-b shadow-sm border-slate-300 tablet:w-56 sm:w-72 w-96 rounded-lg sm:text-sm focus:outline-none"
            />
          </div>
        </div>

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
            {this.state.allBoard.map((value) => (
              <div className="flex justify-center items-center">
                <Boardcard key={value.board_game_id} name={value.name} status={value.status}></Boardcard>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
