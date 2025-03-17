import { TodoStateProps } from "@/types/type"

const TodoSection: React.FC<TodoStateProps> = ({ todo, setTodo }) => {
  return (
    <section>
      <ul>
        {todo.map((data) => (
          <li key={data.id} className="capitalize">
            {data.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoSection
