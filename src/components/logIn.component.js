import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class logIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/customers/verify-customer/" + "fabio123g")
      .then((res) => {
        this.setState({
          user: res.data.user,
          password: res.data.password,
        });
        console.log(res.data.user);
      })
      .catch((error) => {
        console.log(error + " Possibly this user does not exist");
      });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="mb-3" controlId="user">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="User" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="danger" type="submit" block="block">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
