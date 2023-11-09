import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nav.css"
import { Link } from 'react-router-dom'

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect} style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "150px" }}>
      <Link to='/'>
        <Nav.Link disabled style={{ color: "black", fontSize: "20px", width: "100%" }}>
          Home
        </Nav.Link>
      </Link>
      <Nav.Item>
      <Link to='/about'>
        <Nav.Link disabled style={{ color: "black", fontSize: "20px" }}>
          About
        </Nav.Link>
      </Link>
    </Nav.Item>
      <Nav.Item>
      <Link to='/contact'>
        <Nav.Link disabled style={{ color: "black", fontSize: "20px" }}>
          Contact
        </Nav.Link>
      </Link>
    </Nav.Item>
    </Nav >
  );
}

export default NavDropdownExample;