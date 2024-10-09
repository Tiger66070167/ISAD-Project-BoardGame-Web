import React, { Component, FormEvent } from "react"
import Popup from "../utilities/Popup"
import accountFetcher from "../../../../utils/core/fetcher/tableFetcher/accountFetcher"

type props = {
    close: Function
    users_id: number
    oldPass: string
}

export default class PassChangeDialog extends Component<props, { loading: boolean, error: string }> {
    constructor(props: props) {
        super(props);

        this.state = {
            loading: false,
            error: ''
        }
    }

    setLoading(value: boolean) {
        this.setState({ loading: value });
    }
    setError(value: string) {
        this.setState({error: value});
    }

    public async changePass(e: FormEvent) {
        this.setLoading(true);

        e.preventDefault();
        let current: HTMLInputElement = document.querySelector("#current")!;
        let newPass: HTMLInputElement = document.querySelector("#newPass")!;
        let confirm: HTMLInputElement = document.querySelector("#confirm")!;

        if (newPass.value !== confirm.value) {this.setError("Password do not match"); this.setLoading(false); return;}

        if (newPass.value === '' || current.value === '') {this.setError("Please insert all the information"); this.setLoading(false); return;}

        let account: accountFetcher = new accountFetcher();
        if (await account.changePass(this.props.users_id, this.props.oldPass, current.value, newPass.value)) {window.location.reload()}
        else {this.setError("Current password is not correct"); this.setLoading(false); return;}

        this.setLoading(false);
    }

    render(): React.ReactNode {
        return (
            <>
                <Popup>
                    <div className="w-[40vw] h-[50vh] bg-[#303030] rounded-2xl p-[2rem] min-h-[400px] min-w-[350px] relative">
                        <h1 className="text-3xl mb-[5%]">Change Password</h1>
                        <form onSubmit={this.changePass.bind(this)}>
                            <div className="my-[3%]">
                                <label className="block font-bold mb-[1%]" htmlFor="current">Current Password</label>
                                <input onChange={() => {this.setError('')}} type="password" id="current" className="text-white mb-2 py-0.5 bg-[#303030] border-b shadow-sm border-white w-full rounded-none focus:outline-none focus:border-[--primary-color] transition focus:duration-200" />
                            </div>

                            <div className="my-[3%]">
                                <label className="block font-bold mb-[1%]" htmlFor="newPass">New Password</label>
                                <input onChange={() => {this.setError('')}} type="password" id="newPass" className="text-white mb-2 py-0.5 bg-[#303030] border-b shadow-sm border-white w-full rounded-none focus:outline-none focus:border-[--primary-color] transition focus:duration-200" />
                            </div>

                            <div className="mt-[3%] mb-[5%]">
                                <label className="block font-bold mb-[1%]" htmlFor="confirm">Confirm Password</label>
                                <input onChange={() => {this.setError('')}} type="password" id="confirm" className="text-white mb-2 py-0.5 bg-[#303030] border-b shadow-sm border-white w-full rounded-none focus:outline-none focus:border-[--primary-color] transition focus:duration-200" />
                            </div>
                            <div className="flex items-center gap-[2vw]">
                                <button disabled={this.state.loading} className="bg-[--primary-color] px-[5%] py-[1.3%] rounded-2xl hover:opacity-80 disabled:opacity-50">{this.state.loading ? "Loading" : "Submit"}</button>
                                <p className="text-[--incorrect-color]">{this.state.error}</p>
                            </div>
                        </form>
                        <button disabled={this.state.loading} onClick={() => { this.props.close(false) }} className="absolute opacity-60 top-2 right-5 p-[2%]">X</button>
                    </div>
                </Popup>
            </>
        )
    }
}