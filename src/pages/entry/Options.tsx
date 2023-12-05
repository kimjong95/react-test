import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../context/OrderDetail";
import { formatCurrency } from "../../utilities";
import AlertBanner from "../common/AlertBanner";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

type OptionsProps = { optionType: string };

export default function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    // create an abortController to attach to network requests
    const controller = new AbortController();
    axios
      .get(`http://localhost:3030/${optionType}`, { signal: controller.signal })
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        // TODO: handle error response
        setError(true);
      });

    // abort axios call on component unmount
    return () => {
      controller.abort();
    };
  }, [optionType]);

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  if (error) {
    return <AlertBanner />;
  }

  const optionItems = items.map((item: any) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
