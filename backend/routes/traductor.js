import express from "express";
import { db } from "../db/conexion.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { texto, source, target } = req.body;
  const input = (texto || "").toLowerCase().trim();

  try {
    const [rows] = await db.execute(
      "SELECT * FROM palabras WHERE LOWER(espanol) = ? OR LOWER(ingles) = ? LIMIT 1",
      [input, input]
    );

    if (rows && rows.length > 0) {
      const palabra = rows[0];
      const traduccion = source === "es" ? palabra.ingles : palabra.espanol;
      return res.json({ translatedText: traduccion });
    }

    res.json({
      translatedText: "No se encontró traducción. Intenta registrarla.",
    });
  } catch (err) {
    console.error("❌ Error al traducir:", err);
    res.status(500).json({ error: "Error interno al traducir" });
  }
});

export default router;
