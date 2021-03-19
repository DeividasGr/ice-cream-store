import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const checkBoxLabel = (
  <span>
    I agree to <span style={{ color: 'blue' }}>Terms and conditions</span>
  </span>
);

function SummaryForm() {
  const [disabled, setDisabled] = useState(false);

  return (
    //  <div>
    //    <label htmlFor="terms">terms and conditions</label>
    //    <input
    //      id="terms"
    //      type="checkbox"
    //      onChange={(e) => setDisabled(!e.target.checked)}
    //    />
    //    <button type="submit" disabled={disabled}>
    //      confirm order
    //    </button>
    //  </div>
    <Form>
      <Form.Group controlId="terms">
        <Form.Check
          type="checkbox"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
          label={checkBoxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!disabled}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;
