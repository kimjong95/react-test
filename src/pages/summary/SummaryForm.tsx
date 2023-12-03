import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CheckboxLabel } from "./CheckboxLabel";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTcChecked(e.target.checked);
  };

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={onCheckboxChange}
          label={CheckboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
