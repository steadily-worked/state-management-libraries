"use client"
import { styled } from "@stitches/react"
// in the app directory, only by adding this "use client" we can use front-end-specific code such as Hooks like useState or useEffect because in this directory Next.js uses Server Components by default.
import React, { startTransition, useState } from "react"
import Loading from "../loading"

type PostType = {
  title: string
  userId: number
}

export default function PostForm() {
  const [newPost, setNewPost] = useState<PostType>({} as PostType)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  async function updateDummyData(data: PostType) {
    setIsFetching(true)
    await fetch("https://dummyjson.com/posts/add", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
    setIsFetching(false)
  }
  if (isFetching) return <Loading />
  return (
    <Container>
      <InputForm>
        <Title>title:</Title>
        <input
          value={newPost.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPost({ ...newPost, title: e.target.value })
          }
        />
      </InputForm>
      <InputForm>
        <Title>userId:</Title>
        <input
          value={newPost.userId}
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPost({ ...newPost, userId: +e.target.value })
          }
        />
      </InputForm>
      <Button onClick={() => updateDummyData(newPost)}>Add it!</Button>
    </Container>
  )
}

const Container = styled("section", {
  backgroundColor: "Gainsboro",
  padding: "15px",
})

const InputForm = styled("section", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "LightGray",
  width: "30px",
})

const Button = styled("button", {
  backgroundImage:
    "linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)",
  margin: "10px",
  padding: "15px 45px",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  color: "white",
  border: "none",
  boxShadow: "0 0 20px #eee",
  borderRadius: "10px",
  display: "block",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
})

const Title = styled("section", {
  marginRight: "10px",
})
