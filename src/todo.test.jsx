import { describe, it, expect, test } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const testTodo = {
    id: "anyId",
    title: "testTitle",
    description: "hello world",
    priority: 3
};

it("renders without crashing", function () {
    render(<Todo todo={testTodo} />);
});

it("matches snapshot", function () {
    const { container } = render(<Todo todo={testTodo} />);
    expect(container).toMatchSnapshot();
});

it("contains information about todo", function () {
    const result = render(<Todo todo={testTodo} />);

    expect(
        result.queryByText("hello world")
    ).toBeInTheDocument();

    expect(
        result.queryByText("testTitle")
    ).toBeInTheDocument();

});

it("does not contain id", function () {
    const result = render(<Todo todo={testTodo} />);

    expect(
        result.queryByText("anyId")
    ).not.toBeInTheDocument();
});





