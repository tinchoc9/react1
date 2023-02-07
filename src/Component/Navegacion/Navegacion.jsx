import {Link, NavLink} from "react-router-dom";
import { BusquedaNav } from "../Navegacion/BusquedaNav";

export function Navegacion() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <NavLink to='/'>Gestor de Tareas</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
              <NavLink to='crear'>Crear Tarea</NavLink> 
              </li>
            </ul>
            <BusquedaNav />
          </div>
        </div>
      </nav>
    </>
  );
}
