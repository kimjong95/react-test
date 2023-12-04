import Col from "react-bootstrap/Col";

type TopingOptionProps = {
  name: string;
  imagePath: string;
};

export default function ToppingOption({ name, imagePath }: TopingOptionProps) {
  return (
    <Col xs={6} sm={4} md={3} lg={2} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
}
