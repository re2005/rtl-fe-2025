import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Toggle from "../app/components/UiToogle";

describe("Toggle component", () => {
  const options = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
  ];
  const setLabel = vi.fn();

  it("renders correctly", () => {
    render(<Toggle options={options} setLabel={setLabel} label="option1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("applies the correct classes based on the label prop", () => {
    render(<Toggle options={options} setLabel={setLabel} label="option1" />);
    const option1Button = screen.getByText("Option 1");
    const option2Button = screen.getByText("Option 2");

    expect(option1Button).toHaveClass("bg-rtl-blue text-white");
    expect(option2Button).toHaveClass("bg-gray-200 text-gray-700");
  });

  it("calls setLabel with the correct value when a button is clicked", () => {
    render(<Toggle options={options} setLabel={setLabel} label="option1" />);
    const option2Button = screen.getByText("Option 2");

    fireEvent.click(option2Button);
    expect(setLabel).toHaveBeenCalledWith("option2");
  });
});
