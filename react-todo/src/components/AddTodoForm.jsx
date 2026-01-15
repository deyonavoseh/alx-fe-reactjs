import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
