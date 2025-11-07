import { db } from "../db/conexion.js";

// Obtener todas las palabras
export const getAll = (req, res) => {
  const sql = "SELECT * FROM palabras";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// Crear una nueva palabra
export const create = (req, res) => {
  const { espanol, ingles } = req.body;
  const sql = "INSERT INTO palabras (espanol, ingles) VALUES (?, ?)";
  db.query(sql, [espanol, ingles], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Palabra agregada correctamente" });
  });
};
