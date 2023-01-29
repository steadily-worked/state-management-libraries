import Link from "next/link"
import React, { use } from "react"
export default function page() {
  const returnData: {
    todos: [{ id: number; completed: boolean; userId: number; todo: string }]
    total: number
    skip: number
    limit: number
  } = use(getDummyData())

  return (
    <>
      <div>main page</div>
      <div>
        {returnData.todos.map((elem) => (
          <div key={elem.id}>
            <div>todo: {elem.todo}</div>
            <div>isCompleted: {elem.completed}</div>
            <div>userId: {elem.userId}</div>
          </div>
        ))}
      </div>
      <Link href="/posts">Add a new Post!</Link>
    </>
  )
}

export async function getDummyData() {
  const response = await fetch("https://dummyjson.com/todos", {
    cache: "no-store",
    // by adding this we can use SSR
    next: {
      revalidate: 100,
    },
    // by adding this we can use ISR
  })
  return await response.json()
}
