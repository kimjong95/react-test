import React, { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

interface OptionCounts {
  scoops: { [key: string]: number };
  toppings: { [key: string]: number };
}

interface Totals {
  [itemName: string]: number;
}

interface OrderDetailsContext {
  optionCounts: OptionCounts;
  totals: Totals;
  updateItemCount: (
    itemName: string,
    newItemCount: number,
    optionType: "scoops" | "toppings"
  ) => void;
  resetOrder: () => void;
  calculateSubtotal: (optionType: "scoops" | "toppings") => number;
}

const OrderDetails = createContext<OrderDetailsContext | undefined>(undefined);

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return context;
}

export function OrderDetailsProvider(props: { children: React.ReactNode }) {
  const [optionCounts, setOptionCounts] = useState<OptionCounts>({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(
    itemName: string,
    newItemCount: number,
    optionType: "scoops" | "toppings"
  ) {
    // make a copy of the optionCounts state
    const newOptionCounts = { ...optionCounts };

    // update the copy with the new information
    newOptionCounts[optionType][itemName] = newItemCount;

    // update the state with the updated copy
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  }

  function calculateSubtotal(optionType: "scoops" | "toppings") {
    const countsArray = Object.values(optionCounts[optionType]);
    const totalCount = countsArray.reduce((total, value) => total + value, 0);
    return totalCount * pricePerItem[optionType];
  }

  const totals: Totals = {
    scoops: calculateSubtotal("scoops"),
    toppings: calculateSubtotal("toppings"),
  };

  const value: OrderDetailsContext = {
    optionCounts,
    totals,
    updateItemCount,
    resetOrder,
    calculateSubtotal,
  };

  return <OrderDetails.Provider value={value} {...props} />;
}
