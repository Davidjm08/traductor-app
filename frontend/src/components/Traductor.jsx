import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Traductor() {
  const [palabras, setPalabras] = useState([]);
  const [espanol, setEspanol] = useState("");
  const [ingles, setIngles] = useState("");
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");
  const [modo, setModo] = useState("es-en");

  useEffect(() => {
    cargarPalabras();
  }, []);

  const cargarPalabras = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/palabras");
      setPalabras(res.data);
    } catch (err) {
      console.error("Error al conectar con el backend:", err);
    }
  };

  const registrarPalabra = async (e) => {
    e.preventDefault();
    if (!espanol || !ingles) return alert("Completa ambos campos");
    try {
      await axios.post("http://localhost:4000/api/palabras", { espanol, ingles });
      setEspanol("");
      setIngles("");
      cargarPalabras();
    } catch (err) {
      console.error("Error al guardar palabra:", err);
    }
  };

  const traducirFrase = async () => {
    if (!texto) return alert("Escribe algo para traducir");
    try {
      const res = await axios.post("http://localhost:4000/api/traducir", {
        texto,
        source: modo === "es-en" ? "es" : "en",
        target: modo === "es-en" ? "en" : "es",
      });
      setResultado(res.data.translatedText);
    } catch (err) {
      console.error("Error al traducir:", err);
    }
  };

  const eliminarPalabra = async (id) => {
    if (!window.confirm("¿Eliminar esta palabra?")) return;
    await axios.delete(`http://localhost:4000/api/palabras/${id}`);
    cargarPalabras();
  };

  const editarPalabra = async (p) => {
    const nuevoEspanol = prompt("Nuevo texto en español:", p.espanol);
    const nuevoIngles = prompt("Nuevo texto en inglés:", p.ingles);
    if (!nuevoEspanol || !nuevoIngles) return alert("Campos vacíos.");
    await axios.put(`http://localhost:4000/api/palabras/${p.id}`, {
      espanol: nuevoEspanol,
      ingles: nuevoIngles,
    });
    cargarPalabras();
  };

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1 style={{ color: "#00bfff" }}>Traductor Español ↔ Inglés</h1>

      <div style={{ marginBottom: "30px" }}>
        <label>
          <input
            type="radio"
            value="es-en"
            checked={modo === "es-en"}
            onChange={() => setModo("es-en")}
          />
          Español → Inglés
        </label>
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            value="en-es"
            checked={modo === "en-es"}
            onChange={() => setModo("en-es")}
          />
          Inglés → Español
        </label>
      </div>

      <textarea
        rows="3"
        style={{
          width: "80%",
          padding: "10px",
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
          border: "none",
          outline: "none",
        }}
        placeholder="Escribe una palabra o frase..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>
      <br />
      <button
        onClick={traducirFrase}
        style={{
          marginTop: "10px",
          background: "#00bfff",
          border: "none",
          color: "#fff",
          borderRadius: "6px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Traducir
      </button>

      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        Resultado: <strong>{resultado}</strong>
      </p>

      <h2 style={{ color: "#ffc107", marginTop: "40px" }}>Registrar palabra</h2>
      <form onSubmit={registrarPalabra}>
        <input
          value={espanol}
          onChange={(e) => setEspanol(e.target.value)}
          placeholder="Español"
          style={{ marginRight: "8px" }}
        />
        <input
          value={ingles}
          onChange={(e) => setIngles(e.target.value)}
          placeholder="Inglés"
          style={{ marginRight: "8px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#00bfff",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Guardar
        </button>
      </form>

      <h2 style={{ color: "#ffc107", marginTop: "30px" }}>
        Palabras registradas (Base de Datos)
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {palabras.map((p) => (
          <li
            key={p.id}
            style={{
              background: "#222",
              marginBottom: "8px",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <b>{p.espanol}</b> → {p.ingles}
            </span>
            <span>
              <button
                onClick={() => editarPalabra(p)}
                style={{
                  marginRight: "6px",
                  backgroundColor: "#1e90ff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                }}
              >
                Editar
              </button>
              <button
                onClick={() => eliminarPalabra(p.id)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                }}
              >
                Eliminar
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
