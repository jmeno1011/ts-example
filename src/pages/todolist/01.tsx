import TodoComponent from "@/components/todolist/01/TodoComponent";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), text: "Learn React", completed: false },
    { id: uuidv4(), text: "Build a Todo List", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleNewTodoKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const trimmedText = newTodo.trim();
    if (trimmedText) {
      setTodos([
        ...todos,
        { id: uuidv4(), text: trimmedText, completed: false },
      ]);
      setNewTodo("");
    }
  };
  const handleDeleteClick = (id: string) => {
    const todolist = [...todos];
    const updateList = todolist.filter((todo) => todo.id !== id);
    setTodos(updateList);
  };
  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <TodoComponent
        todos={todos}
        newTodo={newTodo}
        handleNewTodoChange={handleNewTodoChange}
        handleNewTodoKeyDown={handleNewTodoKeyDown}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  )
}