import React from "react"

export default class Popup extends React.Component<{children: JSX.Element}> {
    constructor(props: {children: React.JSX.Element}) { super(props) }

    render() {
        return (
           <div className="w-[100vw] h-[100vh] bg-[rgb(0,0,0,0.7)] fixed top-0 right-0 flex justify-center items-center z-10">
                {this.props.children}
           </div>  
        );
    }
}