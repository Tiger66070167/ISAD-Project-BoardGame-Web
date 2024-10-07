"use client";

import React from "react";
import { accountData } from "../../../../utils/typeStorage/accountType";
import accountFetcher from "../../../../utils/core/fetcher/tableFetcher/accountFetcher";

type state = {
  account: accountData
}

export default class profilePage extends React.Component<{ params: { slug: number } }, state> {
  constructor(props: { params: { slug: number } }) {
    super(props);
    this.state = {
      account: { users_id: this.props.params.slug }
    }
  }

  setAccount(data: accountData) {
    this.setState({ account: data });
  }

  async componentDidMount(): Promise<void> {
    let account = new accountFetcher();
    this.setAccount(await account.getAccount(this.state.account.users_id));

    let image = document.querySelector(".profile");

  }

  render() {
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color] flex justify-center laptop:py-20 desktop:py-32">
        {/* My Profile */}
        <div className="w-full px-32">
          <h1 className="laptop:text-3xl desktop:text-4xl font-black text-[--primary-color] py-2">
            My Profile
          </h1>

          {/* Profile */}
          <div className="grid grid-rows-3 gap-y-5">
            <div className="shadow-md rounded-md bg-[#303030] flex items-center px-32">
              <div className=" w-60 h-60 mx-16 rounded-full">
                <img className="profile" src="" />
              </div>
              <div>
                <h3 className="laptop:text-2xl desktop:text-3xl font-bold">
                  Full Name // TODO:
                </h3>
                <h6 className="laptop:text-xl desktop:text-2xl">
                  Email // TODO:
                </h6>
              </div>
            </div>

            {/* Personal Information */}
            <div className="shadow-md rounded-md bg-[#303030] w-full h-min px-9 laptop:py-5 desktop:py-9">
              <h3 className="laptop:text-3xl desktop:text-4xl font-extrabold pb-5">
                Personal Information
              </h3>

              <div className="grid grid-cols-2 px-5">
                <div className="laptop:pb-2 desktop:pb-6">
                  <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                    Fisrt Name
                  </h6>
                  <p className="laptop:text-base desktop:text-2xl">
                    Name // TODO:
                  </p>
                </div>

                <div className="laptop:pb-2 desktop:pb-6">
                  <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                    Last Name
                  </h6>
                  <p className="laptop:text-base desktop:text-2xl">
                    Surname // TODO:
                  </p>
                </div>

                <div className="laptop:pb-2 desktop:pb-6">
                  <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                    Email
                  </h6>
                  <p className="laptop:text-base desktop:text-2xl">
                    mail@email.com // TODO:
                  </p>
                </div>

                <div className="laptop:pb-2 desktop:pb-6">
                  <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                    Phone
                  </h6>
                  <p className="laptop:text-base desktop:text-2xl">
                    012-345-6789 // TODO:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
