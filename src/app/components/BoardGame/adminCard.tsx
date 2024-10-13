"use client";

import React from "react";
import Link from "next/link";
import boardFetcher from "../../../../utils/core/fetcher/tableFetcher/boardFetcher";
import { boardGame } from "../../../../utils/typeStorage/boardType";

export default class adminCard extends React.Component<
  { data: boardGame },
  { status: boolean }
> {
  constructor(props: { data: boardGame }) {
    super(props);

    this.state = {
      status: this.props.data.status!,
    };
  }

  setStatus(value: boolean) {
    this.setState({ status: value });
  }

  private async changeStatusHandler() {
    let changeStatus = new boardFetcher();
    await changeStatus.changeStatus(
      this.props.data.board_game_id,
      !this.state.status
    );

    this.setStatus(!this.state.status);
  }

  private async deleteHandler() {
    let deleteBoard = new boardFetcher();
    await deleteBoard.deleteBoard(this.props.data.board_game_id);

    window.location.reload();
  }

  render() {
    return (
      <div className="w-[300px] shadow-2xl mt-2">
        <div className="grid grid-col-2 bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
          {/* inbox picture Set */}
          <div className=" w-64 mx-auto top-0 pt-5">
            <img
              className="object-scale-down h-48 w-80 rounded-2xl overflow-hidden shadow-md"
              src={this.props.data.picture!}
              alt=""
            />
            <div className="text-xl font-bold text-white flex items-center justify-center pt-4">
              {this.props.data.name}
            </div>
          </div>

          {/* set name and descrip of Menu */}
          <div className="flex flex-col justify-start items-center gap-y-3">
            <div
              className={`text-2xl ${
                this.state.status
                  ? "text-[--passed-color]"
                  : "text-[--incorrect-color]"
              }`}
            >
              {this.state.status ? "Ready" : "Busy"}
            </div>
            <button
              className="bg-[--primary-color]
              px-5 py-1
              rounded
              hover:bg-[--hover-primary-color] duration-300"
              onClick={this.changeStatusHandler.bind(this)}
            >
              Change Status
            </button>
            <div className="flex gap-x-5">
              <Link href={`/admin/BoardGameAdmin/ModifyBoardGame/${this.props.data.board_game_id}`}>
                <button
                  className="px-5 py-1
                bg-[--secondary-color] rounded
                hover:bg-[--passed-color] duration-300"
                >
                  Modify
                </button>
              </Link>
              <button
                className="px-5 py-1
                bg-[--incorrect-color] rounded
                hover:bg-[--hover-incorrect-color] duration-300"
                onClick={this.deleteHandler.bind(this)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
