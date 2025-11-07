import express from "express";
import { db } from "../db/conexion.js";

const router = express.Router();

// 🔹 Consultar todas las palabras
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM palabras ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error("❌ Error al obtener palabras:", err);
    res.status(500).json({ error: "Error al obtener palabras" });
  }
});

// 🔹 Registrar palabra nueva
router.post("/", async (req, res) => {
  const { espanol, ingles } = req.body;
  if (!espanol || !ingles)
    return res.status(400).json({ error: "Faltan campos requeridos" });

  try {
    await db.execute("INSERT INTO palabras (espanol, ingles) VALUES (?, ?)", [
      espanol.toLowerCase().trim(),
      ingles.toLowerCase().trim(),
    ]);
    res.json({ message: "✅ Palabra registrada correctamente" });
  } catch (err) {
    console.error("❌ Error al registrar palabra:", err);
    res.status(500).json({ error: "Error al registrar palabra" });
  }
});

// 🔹 Editar palabra existente
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { espanol, ingles } = req.body;
  if (!espanol || !ingles)
    return res.status(400).json({ error: "Faltan campos requeridos" });

  try {
    await db.execute(
      "UPDATE palabras SET espanol = ?, ingles = ? WHERE id = ?",
      [espanol.toLowerCase().trim(), ingles.toLowerCase().trim(), id]
    );
    res.json({ message: "✅ Palabra actualizada correctamente" });
  } catch (err) {
    console.error("❌ Error al actualizar palabra:", err);
    res.status(500).json({ error: "Error al actualizar palabra" });
  }
});

// 🔹 Eliminar palabra
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM palabras WHERE id = ?", [id]);
    res.json({ message: "🗑️ Palabra eliminada correctamente" });
  } catch (err) {
    console.error("❌ Error al eliminar palabra:", err);
    res.status(500).json({ error: "Error al eliminar palabra" });
  }
});

export default router;
