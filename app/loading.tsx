import React from "react"
import Image from "next/image"
import DummyImage from "../public/image.png"

const Loading = () => {
  return (
    <>
      <div>this is Loading with dummy image</div>
      <Image src={DummyImage} alt={"dummy-image"} />
    </>
  )
}

export default Loading
