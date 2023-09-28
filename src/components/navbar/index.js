import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CalendarContext from "../../context/CalendarContext";
import "./index.css";

function BasicExample() {
  return (
    <CalendarContext.Consumer>
      {(value) => {
        const { currentDate } = value;
        const month = currentDate.getMonth();
        return (
          <Navbar expand="lg" className="navbar-bg">
            <Container>
              <Navbar.Brand href="#home">
                {" "}
                <i className="bi bi-calendar3 p-2 calendar-logo"></i>
                <span className="logo">Calender</span>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Item>
                    <h2 className="month-name">
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                      }).format(currentDate)}{" "}
                    </h2>
                  </Nav.Item>
                  <NavDropdown
                    className="dropdown"
                    title="Week"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/">Day</NavDropdown.Item>
                    <NavDropdown.Item href="/">Week</NavDropdown.Item>
                    <NavDropdown.Item href="/">Month</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Year</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }}
    </CalendarContext.Consumer>
  );
}

export default BasicExample;
