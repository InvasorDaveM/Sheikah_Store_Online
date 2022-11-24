import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import LibraryTableRow from "./LibraryTableRow";

import global from "./../App";

export default class libraryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
    };

    this.games = [
      /*games: [],
      name: "",
      category: "",
      price: 0.0,
      description: "",
      image: "",
      producer: "",*/
    ];
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/customer-games/" + global.userId)
      .then((res) => {
        this.setState({
          library: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.games);
  }

  DataTable() {
    return this.state.library.map((res, i) => {
      axios
        .get(
          "http://localhost:4000/games/selected-game/" +
            this.state.library[i].id_game
        )
        .then((resGame) => {
          this.games.push({
            name: resGame.data.name,
            category: resGame.data.category,
            price: resGame.data.price,
            description: resGame.data.description,
            image: resGame.data.image,
            producer: resGame.data.producer,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      return <LibraryTableRow obj={res} key={i} />;
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
              {/*
              <th>Acción</th>
              */}
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
