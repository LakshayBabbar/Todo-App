import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import "./TodoForm.css";

export default function TodoForm() {
  const [enteredName, setName] = useState("");
  const [enteredDesc, setDescription] = useState("");
  const dispatch = useDispatch();
  const onEnterName = (event) => setName(event.target.value);
  const onEnterDescription = (event) => setDescription(event.target.value);
  const onFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      description: enteredDesc,
    };
    dispatch(addTodo(data));
    setName("");
    setDescription("");
  };
  return (
    <div className="wrapper">
      <h1>
        Todo <span>App</span>
      </h1>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={enteredName}
          onChange={onEnterName}
        />
        <input
          type="text"
          placeholder="Description"
          value={enteredDesc}
          onChange={onEnterDescription}
        />
        <div className="btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
