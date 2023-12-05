import { useOrderDetails } from "../../context/OrderDetail";
import { formatCurrency } from "../../utilities";
import Options from "./Options";

export default function OrderEntry() {
  const { totals } = useOrderDetails();

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
}
