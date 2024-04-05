import { describe, it, expect, test } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Footer from "./Footer";

it("renders without crashing", function () {
    render(<Footer />);
});

it("matches snapshot", function () {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
});

it("renders correct elements", function () {
    const result = render(<Footer />);


    expect(
        result.queryByText("Prødutïv is copyright ©2020 by Flüffy Data Enterprises, Inc.")
    ).toBeInTheDocument();
});