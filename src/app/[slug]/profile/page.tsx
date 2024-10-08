"use client";

import React from "react";
import { accountData } from "../../../../utils/typeStorage/accountType";
import accountFetcher from "../../../../utils/core/fetcher/tableFetcher/accountFetcher";
import Loading from "@/app/components/utilities/Load";
import Popup from "@/app/components/utilities/Popup";
import PassChangeDialog from "@/app/components/Profile/ChangePass";

type state = {
  account: accountData
  profileEdit: boolean
  personalEdit: boolean
  changePass: boolean
  load: boolean
  profile: File | null
  error: boolean
}

export default class profilePage extends React.Component<{ params: { slug: number } }, state> {
  constructor(props: { params: { slug: number } }) {
    super(props);
    this.state = {
      account: { users_id: this.props.params.slug },
      profileEdit: false,
      personalEdit: false,
      changePass: false,
      profile: null,
      load: false,
      error: false
    }
  }

  setAccount(data: accountData) {
    this.setState({ account: data });
  }

  setProfileEdit(value: boolean) { this.setState({ profileEdit: value }); }
  setPersonalEdit(value: boolean) { this.setState({ personalEdit: value }); }
  setLoad(value: boolean) { this.setState({ load: value }); }
  setProfile(file: File | null) { this.setState({ profile: file }); }
  setError(value: boolean) { this.setState({ error: value }); }
  setChangePass(value: boolean) { this.setState({changePass: value}); }

  async componentDidMount(): Promise<void> {
    this.setUp()
  }

  public async setUp() {
    this.setLoad(true);

    let account = new accountFetcher();
    this.setAccount(await account.getAccount(this.state.account.users_id));

    let image: HTMLImageElement = document.querySelector(".profile")!;
    console.log(this.state.account);
    image.src = this.state.account.picture!;
    this.setLoad(false);
  }

  public async handleProfileChange() {
    this.setLoad(true);

    let username: HTMLInputElement = document.querySelector("#username")!;

    if (username.value !== this.state.account.username || this.state.profile != null) {
      let account: accountFetcher = new accountFetcher();
      let outcome: boolean;
      if (this.state.profile) {
        outcome = await account.updateAccount(this.state.account.users_id, username.value, undefined, this.state.profile);
      } else {
        outcome = await account.updateAccount(this.state.account.users_id, username.value);
      }

      if (!outcome) { this.setError(true) }
      this.setAccount(await account.getAccount(this.state.account.users_id));
      this.setProfile(null);
    }


    this.setLoad(false);
    this.setProfileEdit(false);
  }

  public async handlePersonalChange() {
    this.setLoad(true);

    let firstname: HTMLInputElement = document.querySelector("#firstname")!;
    let lastname: HTMLInputElement = document.querySelector("#lastname")!;
    let phone: HTMLInputElement = document.querySelector("#phone")!;

    let outcome: boolean;
    if ((firstname.value !== this.state.account.first_name) || (lastname.value !== this.state.account.last_name) || (phone.value !== this.state.account.phone)) {
      let account: accountFetcher = new accountFetcher();
      outcome = await account.updateAccount(this.state.account.users_id, undefined, undefined, undefined, firstname.value, lastname.value, phone.value);

      if (!outcome) {this.setError(true)}
      this.setAccount(await account.getAccount(this.state.account.users_id));
    }

    this.setLoad(false);
    this.setPersonalEdit(false);
  }

  public handlePic() {
    let file: HTMLInputElement = document.querySelector(".PFP")!;
    let profile: HTMLImageElement = document.querySelector(".profile")!;

    profile.src = URL.createObjectURL(file.files![0]);
    this.setProfile(file.files![0]);
  }

  render() {
    let profile = this.state.profileEdit;
    let personal = this.state.personalEdit;
    return (
      <>
        {this.state.changePass && <PassChangeDialog close={this.setChangePass.bind(this)} oldPass={this.state.account.password!} users_id={this.state.account.users_id} />}
        {this.state.error &&
          <Popup>
            <p
              onClick={() => {
                this.setError(false);
                window.location.reload()
              }}
              className="flex justify-center items-center p-5 bg-[--incorrect-color] mx-8 rounded-sm">Something Wrong please try again</p>
          </Popup>
        }
        {this.state.load && <Loading />}
        <div className="min-h-screen min-w-screen bg-[--neutrals-color] flex justify-center laptop:py-20 desktop:py-32">
          {/* My Profile */}
          <div className="w-full px-32">
            <h1 className="laptop:text-3xl desktop:text-4xl font-black text-[--primary-color] py-2">
              My Profile
            </h1>

            <div className="grid grid-rows-2 gap-y-5">

              {/* Profile */}
              <div className="shadow-md rounded-md bg-[#303030] flex items-center px-32 relative">

                {/* edit button */}
                <button className="absolute top-10 right-10 border-solid border-2 border-white px-[1vw] py-[0.5vh] opacity-50 rounded-md"
                  onClick={profile ? this.handleProfileChange.bind(this) : () => { this.setProfileEdit(true) }}
                >
                  {profile ? "Save" : "Edit"}
                </button>

               {/* change password button */}
               <button className="absolute bottom-10 right-10 border-solid border-2 border-white px-[1vw] py-[0.5vh] opacity-50 rounded-md"
                  onClick={() => { this.setChangePass(true) }}
                >
                  Change password
                </button> 

                {/* profile picture */}
                {profile ?
                  <>
                    <label htmlFor="picture">
                      <div className="flex justify-center items-center bg-[#303030] h-[25vh] w-[25vh] mr-16 rounded-full overflow-hidden relative drop-shadow-2xl	">
                        <div className="flex absolute justify-center items-center w-full h-full bg-black opacity-0 hover:opacity-70">
                          <p className="absolute font-bold">change image</p>
                        </div>
                        <img className="profile h-full" src={this.state.account.picture} />
                      </div>
                    </label>
                    <input onChange={this.handlePic.bind(this)} className="PFP hidden" type="file" id="picture" name="picture" />
                  </>
                  :
                  <div className="flex justify-center items-center bg-[#303030] h-[25vh] w-[25vh] mr-16 rounded-full overflow-hidden drop-shadow-2xl	">
                    <img className="profile h-full" src={this.state.account.picture} />
                  </div>
                }
                <div>
                  {/* Username */}
                  {profile ?
                    <>
                      <input
                        type="text"
                        placeholder="Enter your new username"
                        defaultValue={this.state.account.username}
                        id="username"
                        className="text-white mb-2 py-0.5 bg-[#303030] border-b shadow-sm border-white w-full rounded-none text-2xl focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                      />
                    </>
                    :
                    <h3 className="laptop:text-2xl desktop:text-3xl font-bold mb-2">
                      {this.state.account.username ? this.state.account.username : "Fullname"}
                    </h3>
                  }
                  <h6 className="laptop:text-xl desktop:text-2xl opacity-60">
                    {this.state.account.email ? this.state.account.email : "Email"}
                  </h6>
                </div>
              </div>

              {/* Personal Information */}
              <div className="shadow-md rounded-md bg-[#303030] w-full h-min px-9 laptop:py-5 desktop:py-9 relative">
                <h3 className="laptop:text-3xl desktop:text-4xl font-extrabold pb-5">
                  Personal Information
                </h3>

                {/* edit personal button */}
                <button className="absolute top-10 right-10 border-solid border-2 border-white px-[1vw] py-[0.5vh] opacity-50 rounded-md"
                  onClick={personal ? this.handlePersonalChange.bind(this) : () => { this.setPersonalEdit(true) }}
                >
                  {personal ? "Save" : "Edit"}
                </button>

                <div className="grid grid-cols-2 px-5">
                  <div className="laptop:pb-2 desktop:pb-6">
                    <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                      Fisrt Name
                    </h6>
                    {personal ?
                      <>
                        <input
                          type="text"
                          placeholder="Enter your firstname"
                          defaultValue={this.state.account.first_name}
                          id="firstname"
                          className="text-white bg-[#303030] border-b shadow-sm border-white w-[70%] rounded-none text-xl focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                        />
                      </>
                      :
                      <p className="laptop:text-base desktop:text-2xl">
                        {this.state.account.first_name ? this.state.account.first_name : "[No data]"}
                      </p>
                    }
                  </div>

                  <div className="laptop:pb-2 desktop:pb-6">
                    <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                      Last Name
                    </h6>
                    {personal ?
                      <>
                        <input
                          type="text"
                          placeholder="Enter your lastname"
                          defaultValue={this.state.account.last_name}
                          id="lastname"
                          className="text-white bg-[#303030] border-b shadow-sm border-white w-[70%] rounded-none text-xl focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                        />
                      </>
                      :
                      <p className="laptop:text-base desktop:text-2xl">
                        {this.state.account.last_name ? this.state.account.last_name : "[No data]"}
                      </p>
                    }
                  </div>

                  <div className="laptop:pb-2 desktop:pb-6">
                    <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                      Email
                    </h6>
                    <p className="laptop:text-base desktop:text-2xl">
                      {this.state.account.email ? this.state.account.email : "Email"}
                    </p>
                  </div>

                  <div className="laptop:pb-2 desktop:pb-6">
                    <h6 className="laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]">
                      Phone
                    </h6>
                    {personal ?
                      <>
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          defaultValue={this.state.account.phone}
                          id="phone"
                          className="text-white  bg-[#303030] border-b shadow-sm border-white w-[70%] rounded-none text-xl focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                        />
                      </>
                      :
                      <p className="laptop:text-base desktop:text-2xl">
                        {this.state.account.phone ? this.state.account.phone : "[No data]"}
                      </p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
