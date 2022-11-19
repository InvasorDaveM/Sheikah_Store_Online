import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import global from "./../App";

export default class logIn extends Component {
  //history = useHistory();

  url = "/";

  onSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    var user = e.target.user.value;
    var password = e.target.password.value;
    if (user !== "" && password !== "") {
      axios
        .get("http://localhost:4000/customers/verify-customer/" + user)
        .then((res) => {
          this.setState({
            user: res.data.user,
            password: res.data.password,
          });
          if (password === res.data.password) {
            console.log(res.data.user);
            console.log(res.data.password);
            console.log(res.data._id);

            global.userId = res.data._id;

            console.log(global.userId);

            this.props.history.push("/gamesView");

            //     this.url = "/gamesView";
          } else {
            window.alert("Invalid password");
            //    this.url = "/";
          }
        })
        .catch((error) => {
          console.log(error);
          window.alert("Possibly this user does not exist");
        });
    } else {
      window.alert("Missing data");
    }
  };

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="mb-3" controlId="user">
            <Form.Label>User</Form.Label>
            <Form.Control name="user" type="text" placeholder="User" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button type="submit" variant="danger" block="block">
            submit
          </Button>
        </Form>
        <Link to="/customerCreation">Create User</Link>
      </div>
    );
  }
}
