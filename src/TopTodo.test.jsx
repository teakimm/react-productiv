import { describe, it, expect, test } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const testTodos = [{
    id: "anyId",
    title: "testTitle",
    description: "hello world",
    priority: 3
},
{
    id: "test2",
    title: "this is another test",
    description: "don't read this",
    priority: 1
}
];

it("renders without crashing", function () {
    render(<TopTodo todos={testTodos} />);
});

it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={testTodos} />);
    expect(container).toMatchSnapshot();
});


it("renders correct todo", function () {
    const result = render(<TopTodo todos={testTodos} />);

    expect(
        result.queryByText("this is another test")
    ).toBeInTheDocument();

    expect(
        result.queryByText("hello world")
    ).not.toBeInTheDocument();
});