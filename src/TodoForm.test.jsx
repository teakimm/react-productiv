import { describe, it, expect, test } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

function save(evt) {
    return;
}

const testTodos = {
    title: "testTitle",
    description: "hello world",
    priority: 3
};

it("renders without crashing", function () {
    render(<TodoForm handleSave={save} />);
});

it("contains correct elements", function () {
    const { container } = render(<TodoForm handleSave={save} />);

    expect(
        container.querySelector(".NewTodoForm")
    ).toBeInTheDocument();

    expect(
        container.querySelector("#newTodo-description")
    ).toBeInTheDocument();

    expect(
        container.querySelector("#newTodo-title")
    ).toBeInTheDocument();

    expect(
        container.querySelector("#newTodo-priority")
    ).toBeInTheDocument();
});

it("test submit", function () {
    const { container, debug } = render(<TodoForm initialFormData={testTodos} handleSave={save} />);
    const submitButton = container.querySelector(".NewTodoForm-addBtn");

    fireEvent.click(submitButton);

    expect(
        container.querySelector("#newTodo-title").value
    ).toBe("");
});




