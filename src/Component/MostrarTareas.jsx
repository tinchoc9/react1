import axios from 'axios';
import { useEffect, useState } from "react";

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
  console.log(tareas)
  const eliminarTareas = async (id) => {
    const response = await axios.delete(`${endpoint}/api/tarea/${id}`);
    traerTareas();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Nombre Tarea</th>
          </tr>
        </thead>
        <tbody>
          {console.log(tareas)}
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <th></th>
              <th>{tarea.nombre}</th>
              <th>
                <button onClick={() => eliminarTareas(tarea.id)}>
                  Eliminar Tarea
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
