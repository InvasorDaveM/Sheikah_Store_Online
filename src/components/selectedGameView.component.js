import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import axios from "axios";

import global from "./../App";

export default class selectedGameView extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
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

  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(global.userId);
    const gameObject = {
      name: this.state.name,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      image: this.state.image,
      producer: this.state.producer,
    };

    axios
      .put(
        "http://localhost:4000/games/update-game/" + this.props.match.params.id,
        gameObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Game successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Games View
    this.props.history.push("/gamesView");
  }

  render() {
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

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Productora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tr>
            <td>{this.state.name}</td>
            <td>{this.state.category}</td>
            <td>{this.state.price}</td>
            <td>{this.state.description}</td>
            <td>{this.state.image}</td>
            <td>{this.state.producer}</td>
            <td>
              <Button onClick={this.onSubmit} size="sm" variant="danger">
                Adquirir
              </Button>
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}
