import { remove, Todo, toggle } from "@/modules/todolist"
import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  const onToggle = (id: string) => {
    dispatch(toggle(id));
  }
  const onRemove = (id: string) => {
    dispatch(remove(id));
  }
  return (
    <li className={styles.TodoItem + ` ${todo.completed ? styles.completed : ""}`}>
      <span className={styles.text} onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <span className={styles.remove} onClick={() => onRemove(todo.id)}>(X)</span>
    </li>
  )
}
