import { useEffect, useState } from "react";
import {axios} from "axios";
import { useNavigate } from "react-router-dom";

export function CrearTareas() {
  const endpoint = "";
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(false);
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { nombre: nombre });
    navigate('');
  };
 
  return (
    <>
      <h1>Creacion de nueva tarea</h1>
      <form onSubmit={store}>
        <label>Ingrese el combre de la tarea</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <button>Crear Tarea</button>
      </form>
    </>
  );
}
