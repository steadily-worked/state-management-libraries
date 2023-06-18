"use client"

import atom, { create } from "zustand"
import React, { useState } from "react"
import { useZustandStore } from "../create"
import Link from "next/link"

const LoginForm = () => {
  const { userName, setUserName, password, setPassword } = useZustandStore()
  const loginState = { userName, password }
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(+e.target.value)
  }

  console.log(loginState.userName)

  return (
    <>
      username:{" "}
      <input type="text" onChange={onChangeUsername} value={userName} />
      password:{" "}
      <input type="number" onChange={onChangePassword} value={password} />
      <button onClick={() => alert(loginState)}>get return value!</button>
      <Link href="/posts">가보자</Link>
    </>
  )
}

export default LoginForm
