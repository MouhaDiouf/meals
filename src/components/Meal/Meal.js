import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
function Meal({ meal }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem", margin: "10px 0" }}>
        <Card.Img variant="top" src={meal.image} />
        <Card.Body>
          <Card.Title>{meal.title}</Card.Title>
          <p class="badge bg-success"> {meal.category}</p> <br />
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
          <a href={meal.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Meal;
