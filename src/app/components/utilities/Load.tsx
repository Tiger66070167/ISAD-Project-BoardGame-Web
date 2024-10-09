import React, { Component } from 'react'
import Popup from './Popup'
import image from "@/assets/loading.gif"
import Image from 'next/image'

export class Loading extends Component {
  render() {
    return (
      <Popup>
        <Image src={image} alt="" />
      </Popup>
    )
  }
}

export default Loading