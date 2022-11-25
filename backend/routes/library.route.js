let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Estudiante
let librarySchema = require("../models/Library");

// CREAR Estudiante
router.route("/insert-bought-game").post((req, res, next) => {
  librarySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Estudiantes
router.route("/:id_customer").get((req, res, next) => {
  librarySchema.find({ id_customer: req.params.id_customer }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/verify-library/:id_customer/:id_game").get((req, res, next) => {
  librarySchema.findOne(
    { id_customer: req.params.id_customer, id_game: req.params.id_game },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
});

module.exports = router;
