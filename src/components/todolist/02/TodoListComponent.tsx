import { RootState } from "@/modules";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoListComponent() {
  const todos = useSelector((state: RootState) => state.todos);

  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo} />
      ))}
    </ul>
  );
}
