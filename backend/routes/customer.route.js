let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Estudiante
let customerSchema = require("../models/Customer");

// CREAR Estudiante
router.route("/create-customer").post((req, res, next) => {
  customerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Estudiantes
router.route("/").get((req, res, next) => {
  customerSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Estudiante
router.route("/edit-customer/:id").get((req, res, next) => {
  customerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Verificar un Estudiante

router.route("/verify-customer/:user").get((req, res, next) => {
  customerSchema.findOne({ user: req.params.user }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Estudiante
router.route("/update-customer/:id").put((req, res, next) => {
  customerSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Customer updated successfully !");
      }
    }
  );
});

// BORRAR Estudiante
router.route("/delete-customer/:id").delete((req, res, next) => {
  customerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
