import { Jumbotron, Button } from "react-bootstrap";
import headerStyles from "./Header.module.css";

function Header() {
  return (
    <Jumbotron className={headerStyles.jumbotron}>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

export default Header;
