"use client"

import { atom, useAtom } from "jotai"
import React from "react"

const LoginForm = () => {
  const loginFormAtom = atom({ username: "hello", password: 1234 })
  const upperCaseAtom = atom((get) => get(loginFormAtom).username.toUpperCase())
  const [loginForm, setLoginForm] = useAtom(loginFormAtom)

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, username: e.target.value })
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, password: +e.target.value })
  }
  return (
    <>
      username:{" "}
      <input
        type="text"
        onChange={onChangeUsername}
        value={loginForm.username}
      />
      password:{" "}
      <input
        type="number"
        onChange={onChangePassword}
        value={loginForm.password}
      />
      <button onClick={() => alert(loginForm)}>get return value!</button>
    </>
  )
}

export default LoginForm
