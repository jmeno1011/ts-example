import { v4 as uuidv4 } from "uuid";
const ADD = 'todos/Add' as const;
const TOGGLE = 'todos/TOGGLE' as const;
const REMOVE = 'todos/REMOVE' as const;

export const add = (text: string) => ({
    type: ADD,
    payload: text
});
export const toggle = (id: string) => ({
    type: TOGGLE,
    payload: id
})

export const remove = (id: string) => ({
    type: REMOVE,
    payload: id
})

//리듀서를 작성 할 때 action 파라미터의 타입을 설정하기 위해서 우리가 만든 모든 액션들의 TypeScript 타입을 준비해주어야한다.
type TodosAction =
    | ReturnType<typeof add>
    | ReturnType<typeof toggle>
    | ReturnType<typeof remove>;

// 상태를 위한 타입 선언
export type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

type TodoState = Todo[];

const initialState: TodoState = [
    { id: uuidv4(), text: "Learn React", completed: false },
    { id: uuidv4(), text: "Build a Todo List", completed: false },
    { id: uuidv4(), text: "Start Learn Typescript", completed: true },
]

function todos(state: TodoState = initialState, action: TodosAction) {
    switch (action.type) {
        case ADD:
            const newId = uuidv4();
            return state.concat({
                id: newId,
                text: action.payload,
                completed: false
            })
        case TOGGLE:
            return state.map(todo => (
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            ))
        case REMOVE:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default todos;