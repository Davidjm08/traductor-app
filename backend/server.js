import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import palabraRoutes from "./routes/palabras.js";
import traductorRoutes from "./routes/traductor.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/palabras", palabraRoutes);
app.use("/api/traducir", traductorRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
