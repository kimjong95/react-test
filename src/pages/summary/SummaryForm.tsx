import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checked}
          label={checkboxLabel}
          onClick={(e) => setChecked(!checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checked}>
        confirm order
      </Button>
    </Form>
  );
};
