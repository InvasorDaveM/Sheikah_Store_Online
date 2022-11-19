import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon from "./icon.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CustomerCreationObject from "./components/customerCreation.component";
import GamesViewObject from "./components/gamesView.component";
import SelectedGameViewObject from "./components/selectedGameView.component";
import LogInObject from "./components/logIn.component";
import ProfileViewObject from "./components/profileView.component";

import "bootstrap/dist/css/bootstrap.min.css";

let global = {
  userId: "",

  get userId() {
    return `${this.user}`;
  },

  set userId(userid) {
    this.userId = userid;
  },
};

function App() {
  return (
    <div className="App">
      <Router>
        {/*   <header className="App-header"> */}

        {/*    </header> */}
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  {/* RUTA A PÁGINA PRINCIPAL */}
                  <Route
                    exact
                    path="/"
                    component={(props) => <LogInObject {...props} />}
                  />

                  {/* RUTA A LISTA DE CREACIÓN DE CLIENTE */}
                  <Route
                    exact
                    path="/customerCreation"
                    component={(props) => <CustomerCreationObject {...props} />}
                  />

                  <div>
                    <Navbar
                      collapseOnSelect
                      expand="lg"
                      bg="dark"
                      variant="dark"
                    >
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
                            <Link to={"/gamesView"} className="nav-link">
                              Products
                            </Link>
                            {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                            <Link to={"/"} className="nav-link">
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

                    {/* RUTA A LISTA DE JUEGOS DE LA TIENDA */}
                    <Route
                      exact
                      path="/gamesView"
                      component={(props) => <GamesViewObject {...props} />}
                    />
                    <Route
                      exact
                      path="/selectedGameView/:id"
                      component={(props) => (
                        <SelectedGameViewObject {...props} />
                      )}
                    />
                    <Route
                      exact
                      path="/profileView"
                      component={(props) => <ProfileViewObject {...props} />}
                    />
                  </div>
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
