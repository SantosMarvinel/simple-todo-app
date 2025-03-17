"use client"

import { useState } from "react"

import TodoForm from "@/components/todo-form"
import TodoSection from "@/components/todo-section"
import { TodoProps } from "@/types/type"

export default function App() {
  const [todo, setTodo] = useState<TodoProps[]>([])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-3 text-2xl font-bold text-black/70">Todo List</h1>
      <div className="min-h-full w-[550px] rounded-md bg-white px-5 py-3 shadow-md">
        <TodoForm todo={todo} setTodo={setTodo} />
        <TodoSection todo={todo} setTodo={setTodo} />
      </div>
    </div>
  )
}
