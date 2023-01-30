import { newUserIdState, postState } from "./atom"
import { selector } from "recoil"

export const addUserIdSelector = selector({
  key: "newUserId",
  get: ({ get }) => {
    const newUserId = get(newUserIdState)
    const currentUserId = get(postState).userId

    return `new user id: ${newUserId}, current user id: ${currentUserId}`
  },
})
