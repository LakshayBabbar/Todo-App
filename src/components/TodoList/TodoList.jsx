import "./TodoList.css";
import TodoListItems from "./TodoListItems";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="todoLists">
      {todos.map((todo) => (
        <TodoListItems
          key={todo.id}
          id={todo.id}
          name={todo.name}
          description={todo.description}
        />
      ))}
    </div>
  );
}