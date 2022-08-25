import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from "./routes";//Aca estan  todas las rutas de mi App.

import logo from '../logo.svg';




//Manejo de Rutas con React Router Dom v6
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>{/*Ver aclaraciones*/}
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            <ul>
              {
                //el item del map esta desestructurado
                //seria algo como esto sino: route.to, route.name
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ path, Component }, i) => (
                <Route key={i} path={path} element={< Component />} />
              ))
            }
            {/* Redirect */}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>


        </div>
      </BrowserRouter>
    </Suspense>
  )
};

/*
El Suspense es un componente de React, que envuelve toda mi App.
Su objetivo es mostrar "algo" mientras cargan los componentes de forma peresoza.

Lo que meto adentro del fallback es el componente o la etiqueta HTML que quiero mostrar
mientras esperamos que cargue la ruta seleccionada.
*/
