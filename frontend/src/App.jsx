
import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const API_URL = "http://localhost:5000";

  const loadTodos = async () => {
    const res = await fetch(`${API_URL}/todos`);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async () => {
    if (!text.trim()) return;

    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const newTodo = await res.json();
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE"
    });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Task Tracker ⭐⭐⭐</h1>

      <div className="form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ajouter une tâche..."
        />

        <button onClick={addTodo}>Ajouter</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;