import { FormEvent, useState } from "react"

import { nanoid } from "nanoid"
import { IoIosAddCircleOutline } from "react-icons/io"

import { TodoProps, TodoStateProps } from "@/types/type"

const TodoForm: React.FC<TodoStateProps> = ({ todo, setTodo }) => {
  // Add a new state for the title
  const [title, setTitle] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo: TodoProps = {
      id: nanoid(),
      title,
      completed: false,
    }

    // check if the title is empty
    if (title.trim().length > 0) {
      setTodo([...todo, newTodo])
      setTitle("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="ease focus:border-primary-500 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 focus:shadow focus:outline-none"
          placeholder="What is your task?"
          required
        />

        <button
          type="submit"
          className="bg-primary-500 flex cursor-pointer items-center gap-1 rounded-md px-4 py-2 text-white"
        >
          <IoIosAddCircleOutline size={20} /> Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
