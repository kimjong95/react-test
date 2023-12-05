import { screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../mocks/server";
import OrderEntry from "../pages/entry/OrderEntry";
import { render } from "../util/testing-library-utils";

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<OrderEntry />);
  const alerts = await screen.findAllByRole("alert");
  expect(alerts).toHaveLength(2);
});
