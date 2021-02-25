import React from "react";
import Image from "./components/Image/Image";
import Captioned from "./components/Captioned/Captioned";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  var completeButton = "Complete";
  todo.isCompleted === true
    ? (completeButton = "Uncomplete")
    : (completeButton = "Complete");
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>{completeButton}</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todoData"))
  );

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("todoData", JSON.stringify(newTodos));
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted
      ? (newTodos[index].isCompleted = false)
      : (newTodos[index].isCompleted = true);
    setTodos(newTodos);
    localStorage.setItem("todoData", JSON.stringify(newTodos));
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todoData", JSON.stringify(newTodos));
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <Image />
      <Captioned src="https://cdn.mos.cms.futurecdn.net/2Gwau7TtiHM5PdsjFeaxnm-320-80.jpg">
        <div className="">This uses props.children</div>
      </Captioned>
    </div>
  );
}

export default App;
