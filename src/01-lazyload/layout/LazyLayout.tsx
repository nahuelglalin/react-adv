import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Rutas hijas iran aca */}
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        {/* Redirect */}
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  )
};

export default LazyLayout;

/*
Aclaraciones:

  Este archivo va a ser cargado de forma perezosa, pero una vez cargado, van a cargar 
  todas sus rutas hijas.
  Funciona como un modulo, que, al cargarse, se cargan todas sus rutas hijas,
  que en este caso, se llaman
  lazy1, lazy2 y lazy3 
 
*/