import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
function Meal({ meal }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={meal.image} />
        <Card.Body>
          <Card.Title>{meal.title}</Card.Title>
          <Card.Text>{meal.description}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            See More Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {meal.instructions.split(".").map((sentence, idx) => (
            <p key={idx}>{sentence}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Meal;
