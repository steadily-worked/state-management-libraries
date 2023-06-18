import { create } from "zustand"

type loginFormType = {
  userName: string
  password: number
  getUpperCase: (state: string) => void
  setUserName: (userName: string) => void
  setPassword: (password: number) => void
}

export const useZustandStore = create<loginFormType>((set) => ({
  userName: "hello",
  password: 1234,
  setUserName: (userName: string) => {
    set(() => ({ userName }))
  },
  setPassword: (password: number) => {
    set(() => ({ password }))
  },
  getUpperCase: (userName) => {
    set(() => ({ userName: userName.toUpperCase() }))
  },
}))
