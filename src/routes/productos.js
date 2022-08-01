const express = require("express");
const routes = express.Router();
const Productoschema = require("../models/productos");

routes.post("/productos", (req, res) => {
  const productos = Productoschema(req.body);
  productos
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

routes.get("/productos", (req, res) => {
  Productoschema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

routes.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { title, imagen, descripcion, puntaje, cantidad, precio } = req.body;
  Productoschema.updateOne(
    { _id: id },
    { $set: { title, imagen, descripcion, puntaje, cantidad, precio } }
  )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

routes.delete("/productos/delete/:id", (req, res) => {
  const { id } = req.params;
  Productoschema.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = routes;
