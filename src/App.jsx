import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <div className="wrapper">
      <div className="absolute" />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
