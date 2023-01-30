"use client"
import React from "react"
import { RecoilRoot } from "recoil"
import PostForm from "./PostForm"

const PostPage = () => {
  return (
    <RecoilRoot>
      <div>This Page is about Post</div>
      <PostForm />
    </RecoilRoot>
  )
}
export default PostPage
