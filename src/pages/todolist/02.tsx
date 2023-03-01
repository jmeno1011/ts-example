import TodoInsert from "@/components/todolist/02/TodoInsert";
import TodoListComponent from "@/components/todolist/02/TodoListComponent";
import { add } from "@/modules/todolist";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoList() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(value));
    setValue("");
  }
  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <TodoInsert
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <TodoListComponent />
    </div>
  )
}