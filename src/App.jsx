import { MostrarTareas } from "./Component/MostrarTareas";
import {CrearTareas} from './Component/CrearTareas'
import {EditarTareas} from'./Component/EditarTareas'
import {BrowserRouter, Route, Routes  } from 'react-router-dom'

export function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/crear" element={<CrearTareas/>} ></Route>
  <Route path="/" element={<MostrarTareas />}></Route>
  <Route path="/editar/:id" element={<EditarTareas />}></Route>
</Routes>
</BrowserRouter>

  );
}
