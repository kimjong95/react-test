import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { OrderDetailsProvider } from "../context/OrderDetail";

const renderWithContext = (
  ui: ReactElement,
  options?: RenderOptions
): ReturnType<typeof render> => {
  return render(ui, { wrapper: OrderDetailsProvider, ...options });
};
export { renderWithContext as render };
