import { describe, it, expect, test } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

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
    render(<EditableTodoList todos={testTodos} />);
});

it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={testTodos} />);
    expect(container).toMatchSnapshot();
});

it("renders editableTodos", function () {
    const result = render(<EditableTodoList todos={testTodos} />);

    expect(
        result.queryByText("Write some code")
    ).toBeInTheDocument();
    expect(
        result.queryByText("Cook something healthy")
    ).toBeInTheDocument();
    expect(
        result.queryByText("In bed by 11:15")
    ).toBeInTheDocument();
    expect(
        result.queryByText("lmao")
    ).not.toBeInTheDocument();
});