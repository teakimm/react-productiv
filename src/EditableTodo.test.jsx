import { describe, it, expect, test } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const testTodo = {
    id: "anyId",
    title: "testTitle",
    description: "hello world",
    priority: 3
};


it("renders without crashing", function () {
    render(<EditableTodo todo={testTodo} />);
});

it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={testTodo} />);
    expect(container).toMatchSnapshot();
});

it("contains todo", function () {
    const result = render(<EditableTodo todo={testTodo} />);


    expect(
        result.queryByText("testTitle")
    ).toBeInTheDocument();

    expect(
        result.queryByText("hello world")
    ).toBeInTheDocument();

    expect(
        result.queryByText("not a description")
    ).not.toBeInTheDocument();
});

it("contains edit and delete button", function () {
    const { container } = render(<EditableTodo todo={testTodo} />);


    expect(
        container.querySelector(".EditableTodo-toggle")
    ).toBeInTheDocument();

    expect(
        container.querySelector(".EditableTodo-delBtn")
    ).toBeInTheDocument();

});


it("test update", function () {
    const { container, debug } = render(<EditableTodo todo={testTodo} />);
    const updateButton = container.querySelector(".EditableTodo-toggle");

    fireEvent.click(updateButton);

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