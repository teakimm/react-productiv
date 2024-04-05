import { describe, it, expect, test } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

const testTodos = [
    {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
    },
    {
        id: 2,
        title: "Make dinner",
        description: "Cook something healthy",
        priority: 1,
    },
    {
        id: 3,
        title: "Go to bed",
        description: "In bed by 11:15",
        priority: 3,
    },
];

it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos} />);
});

it("renders correct message for no todos", function () {
    const result = render(<TodoApp />);

    expect(
        result.queryByText("You have no todos.")
    ).toBeInTheDocument();

    expect(
        result.queryByText("No todos yet!")
    ).toBeInTheDocument();
});

it("renders todo list when there are todos", function () {
    const result = render(<TodoApp initialTodos={testTodos} />);

    expect(
        result.queryByText("Write some code")
    ).toBeInTheDocument();

    expect(
        result.queryByText("In bed by 11:15")
    ).toBeInTheDocument();

    expect(
        result.queryByText("lmao")
    ).not.toBeInTheDocument();
});

it("renders top todo", function () {
    const result = render(<TodoApp initialTodos={testTodos} />);
    const { container } = render(<TodoApp initialTodos={testTodos} />);

    expect(
        result.queryByText("No todos yet!")
    ).not.toBeInTheDocument();

    expect(
        container.querySelector(".TodoApp-TopTodo")
    ).toBeInTheDocument();

    expect(
        container.querySelectorAll(".Todo").length
    ).toEqual(4);

});

it("renders todoForm", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);

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

