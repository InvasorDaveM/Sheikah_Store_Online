import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon from "./icon.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CustomerCreationObject from "./components/create-customer.component";
import libraryView from "./components/libraryView.component";
import productsView from "./components/productsView.component";
import profileView from "./components/profileView.component";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
   {/*   <header className="App-header"> */}
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={icon}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
                {"  "}
                {/* <Link> LINK PARA SALIR DE LA APP </Link> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                  <Link to={"/create-customer"} className="nav-link">
                    Products
                  </Link>
                  {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                  <Link to={"/libraryView"} className="nav-link">
                    Library
                  </Link>
                  {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
                <Nav>
                  {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                  <Link to={"/profileView"} className="nav-link">
                    Profile
                  </Link>
                  {/*<Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>*/}
                  <Link to={"/"} className="nav-link">
                    Log Out
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    {/*    </header> */}
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CustomerCreationObject {...props} />}
                  />
                  <Route
                    exact
                    path="/create-customer"
                    component={(props) => <CustomerCreationObject {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
