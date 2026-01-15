import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders the TodoList component with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a todo");
    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todo = screen.getByText("Write Tests");
    const deleteButtons = screen.getAllByText("Delete");

    fireEvent.click(deleteButtons[1]);

    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();
  });
});
