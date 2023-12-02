import { fireEvent, render, screen } from "@testing-library/react";
import { SummaryForm } from "../pages/summary/SummaryForm";

test("Initial Conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
