import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import axios from "axios";

import global from "./../App";

export default class profileView extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/customers/edit-customer/" + global.userId)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          password: res.data.password,
        });
        console.log(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(global.userId);

    var name = e.target.name.value;
    var email = e.target.email.value;
    var password = e.target.password.value;
    var newPassword = e.target.newPassword.value;
    var confirmPassword = e.target.confirmPassword.value;

    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      newPassword !== "" &&
      confirmPassword !== ""
    ) {
      if (password === this.state.password) {
        if (newPassword === confirmPassword) {
          const customerObject = {
            name: name,
            email: email,
            password: newPassword,
          };
          axios
            .put(
              "http://localhost:4000/customers/update-customer/" +
                global.userId,
              customerObject
            )
            .then((res) => {
              console.log(res.data);
              window.alert("Customer successfully updated");
              this.props.history.push("/gamesView");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          window.alert("New password no match");
        }
      } else {
        window.alert("Invalid actual password");
      }
    } else {
      window.alert("Missing data");
    }
  };

  deleteCustomer() {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(
          "http://localhost:4000/customers/delete-customer/" + global.userId
        )
        .then((res) => {
          console.log("Customer successfully deleted!");
          this.props.history.push("/logIn");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              defaultValue={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              defaultValue={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Actual Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              name="newPassword"
              type="password"
              placeholder="New Password"
              onChange={this.onChangeCustomerPassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update User
          </Button>

          <Button onClick={this.deleteCustomer} size="lg" variant="danger">
            Delete User
          </Button>
        </Form>
      </div>
    );
  }
}
