/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import axios from "axios";

import global from "./../App";

export default class selectedGameView extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: "",
      category: "",
      price: 0.0,
      description: "",
      image: "",
      producer: "",
    };
  }
  verify = false;
  textButton = "Get Game";
  colorButton = {
    backgroundColor: "Red",
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/games/selected-game/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          category: res.data.category,
          price: res.data.price,
          description: res.data.description,
          image: res.data.image,
          producer: res.data.producer,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.verify == true) {
      window.alert("You already have this game");
      // Redirect to Library View
      this.props.history.push("/libraryView");
    } else {
      console.log(global.userId);
      console.log(this.props.match.params.id);
      const libraryObject = {
        id_customer: global.userId,
        id_game: this.props.match.params.id,

        //Parte picha

        name: this.state.name,
        category: this.state.category,
        price: this.state.price,
        description: this.state.description,
        image: this.state.image,
        producer: this.state.producer,
      };

      axios
        .post(
          "http://localhost:4000/customer-games/insert-bought-game",
          libraryObject
        )
        .then((res) => console.log(res.data));

      window.alert("Game bought");

      // Redirect to Games View
      this.props.history.push("/gamesView");
    }
  }

  render() {
    axios
      .get(
        "http://localhost:4000/customer-games/verify-library/" +
          global.userId +
          "/" +
          this.props.match.params.id
      )
      .then((res) => {
        if (res.data != null) {
          this.verify = true;
          this.textButton = "In your libary";
          this.colorButton = {
            backgroundColor: "Gray",
          };
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <div className="form-wrapper">
        {/*
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Category">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="text"
              value={this.state.category}
              onChange={this.onChangeStudentEmail}
            />
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={this.state.price}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Actualizar Juego
          </Button>
        </Form>
        */}

        <p>{this.state.image}</p>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Producer</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.name}</td>
              <td>{this.state.category}</td>
              <td>{this.state.description}</td>
              <td>{this.state.producer}</td>
              <td>{this.state.price}</td>
              <td>
                <Button
                  onClick={this.onSubmit}
                  size="sm"
                  variant="danger"
                  style={this.colorButton}
                >
                  {this.textButton}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
