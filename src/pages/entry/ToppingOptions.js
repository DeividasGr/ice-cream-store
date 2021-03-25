import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ToppingOptions({ name, imagePath, updateItemCount }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '50%' }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            updateItemCount(name, e.target.checked ? 1 : 0);
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}

export default ToppingOptions;
