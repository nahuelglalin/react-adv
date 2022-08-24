/*
Este es mi archivo de rutas independientes.
Aca voy a manejar las rutas existentes de mi app.
Voy a trabajar el manejo de rutas con LazyLoad
*/
import {lazy} from 'react';

type JSXComponent = () =>  JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;//ver aclaraciones
  name: string;
}

//Para hacer el siguiente import, tengo que hacer un "export default" dentro del componente
const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/"../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/"../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/"../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy 1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy 2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy 3'
  }
]

/*
  Aclaraciones:
    El siguiente tipo de dato:
    () => JSX.Element
    Esto indica que es un componente de React.

    El siguiente tipo de dato:
    React.LazyExoticComponent<() => JSX.Element>
    Esto indica que es un componente de React con LazyLoad.

  En el caso de la interface Route, 
  el Componente, acepta ambos tipos de datos.

  webpackChunkName => Esto es para identificar el componente que carga
  dentro de Network, en el f12 del google chrome
*/