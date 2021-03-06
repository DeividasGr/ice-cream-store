import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function SummaryForm({ setOrderPhase }) {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // pass along to the next phase.
    // The next page will handle submitting order from context.
    setOrderPhase('completed');
  };

  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms">
        <Form.Check
          type="checkbox"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!disabled}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;
