import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useOrderDetails } from "../../context/OrderDetail";

type TopingOptionProps = {
  name: string;
  imagePath: string;
};

export default function ToppingOption({ name, imagePath }: TopingOptionProps) {
  //
  const { updateItemCount } = useOrderDetails();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateItemCount(name, event.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col xs={6} sm={4} md={3} lg={2} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type="checkbox" label={name} onChange={handleChange} />
      </Form.Group>
    </Col>
  );
}
