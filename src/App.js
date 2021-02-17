import React from "react";
import "./App.css";
import Editable from "./Editable";

function Todo({ todo, index, completeTodo, removeTodo }) {
  var completeButton = "Complete";
  todo.isCompleted === true ? (completeButton = "Uncomplete") : (completeButton = "Complete");
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
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todoData")));
  const [title, setTitle] = React.useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("todoData", JSON.stringify(newTodos));
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted ? (newTodos[index].isCompleted = false) : (newTodos[index].isCompleted = true);
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
      <Editable
      text={title}
      placeholder="Add a title"
      type="input"
    >
      <input
        type="text"
        name="title"
        placeholder="Add a title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </Editable>
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
    </div>
  );
}

export default App;
