import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MostrarTareas() {
  const endpoint = "http://127.0.0.1:8000";

  let [tareas, setTareas] = useState([]);

  useEffect(() => {
    traerTareas();
  }, []);

  const traerTareas = async () => {
    const response = await axios.get(`${endpoint}/api/tareas`);
    setTareas(response.data);
  };
  console.log(tareas);
  const eliminarTareas = async (id) => {
    const response = await axios.delete(`${endpoint}/api/dtarea/${id}`);
    traerTareas();
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre Tarea</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <th>{tarea.nombre}</th>
              <th>
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => eliminarTareas(tarea.id)}
                >
                  Eliminar Tarea
                </button>
                {
                  //<Link to={`/editar/${tarea.id}` }>Editar</Link>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
