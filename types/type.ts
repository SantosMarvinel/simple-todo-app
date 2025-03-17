import { Dispatch, SetStateAction } from "react"

export type TodoProps = {
  id: string
  title: string
  completed: boolean
}

export interface TodoStateProps {
  todo: TodoProps[]
  setTodo: Dispatch<SetStateAction<TodoProps[]>>
}
