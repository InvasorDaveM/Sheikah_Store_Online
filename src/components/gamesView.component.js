import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import GameTableRow from "./GameTableRow";

export default class gamesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/games/")
      .then((res) => {
        this.setState({
          games: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.games.map((res, i) => {
      return <GameTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
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
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
