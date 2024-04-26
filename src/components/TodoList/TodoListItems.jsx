import "./TodoListItems.css";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todoSlice";

export default function TodoListItems(props) {
  const dispatch = useDispatch();
  return (
    <div className="todoList">
      <div className="todoDetail">
        <span className="heading">{props.name}</span>
        <span className="para">{props.description}</span>
      </div>
      <div className="button">
        <button
          onClick={() => {
            dispatch(removeTodo(props.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
