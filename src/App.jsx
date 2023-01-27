import { MostrarTareas } from "./Component/MostrarTareas";
import { CrearTareas } from "./Component/CrearTareas";
import { EditarTareas } from "./Component/EditarTareas";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="creartarea" element={<CrearTareas />} />
          <Route path="editar/:id" element={<EditarTareas />} />
          <Route path="/" element={<MostrarTareas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
