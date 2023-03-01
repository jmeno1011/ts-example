import { Todo } from '@/pages/todolist/01';

type TodoComponentProps = {
  todos: Todo[];
  newTodo: string;
  handleNewTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewTodoKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleDeleteClick: (id: string) => void;
}

export default function TodoComponent({
  todos,
  newTodo,
  handleNewTodoChange,
  handleNewTodoKeyDown,
  handleDeleteClick
}: TodoComponentProps) {
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <label>todo : </label>
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          onKeyDown={handleNewTodoKeyDown}
          placeholder="Enter a task"
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteClick(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>{todos.length} items left</div>
    </>
  )
}
