import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  const [Todos, setTodo] = useState([]);

  useEffect(() => {
    Todos.length !== 0 && localStorage.setItem("data", JSON.stringify(Todos));
    
    const data = JSON.parse(localStorage.getItem("data"));
    Todos.length === 0 && data !== null && setTodo(data); 
  }, [Todos]);


  const onFormData = (formData) => {
    if (formData.title.trim().length <= 0) {
      alert("Name cannot be empty!");
      return;
    } else {
      setTodo((prevTodos) => {
        return [formData, ...prevTodos];
      });
    }
  };

  const deleteItem = (id) => {
    id === 0  && localStorage.removeItem("data");
    setTodo((prevTodos) => {
      return prevTodos.filter((updateTodo, index) => {
        return index !== id;
      });
    });
    console.log(Todos)
  };

  return (
    <div className="wrapper">
      <div className="absolute" />
      <TodoForm onAddData={onFormData} />
      <TodoList elements={Todos} idSelector={deleteItem} />
    </div>
  );
}

export default App;
