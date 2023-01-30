import { atom } from "recoil"

export const postState = atom({
  key: "post",
  default: { title: "", userId: 555 },
})

export const newUserIdState = atom({
  key: "userId",
  default: 333,
})
