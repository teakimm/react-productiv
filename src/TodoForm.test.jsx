import { describe, it, expect, test } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

function save(evt) {
    evt.preventDefault();
}


const testTodos = {
    id: "anyId",
    title: "testTitle",
    description: "hello world",
    priority: 3
};

it("renders without crashing", function () {
    render(<TodoForm handleSave={save} />);
});

it("contains initial test data", function () {
    const result = render(<TodoForm initialFormData={testTodos} handleSave={save} />);
    const { container } = render(<TodoForm initialFormData={testTodos} handleSave={save} />);
    console.log(result);

    expect(
        result.queryByText("testTitle")
    ).toBeInTheDocument();

    expect(
        result.queryByText("hello world5")
    ).not.toBeInTheDocument();
});




