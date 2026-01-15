import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList and initial demo todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo completion status", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");

    // initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // click to toggle completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    // click again to toggle back
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todoText = screen.getByText("Write Tests");
    expect(todoText).toBeInTheDocument();

    // delete button is next to it
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    fireEvent.click(deleteButtons[1]); // deletes the 2nd todo ("Write Tests")

    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();
  });
});
