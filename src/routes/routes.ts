/*
Este es mi archivo de rutas independientes.
Aca voy a manejar las rutas existentes de mi app.
Voy a trabajar el manejo de rutas con LazyLoad
*/
import {lazy} from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () =>  JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;//ver aclaraciones
  name: string;
}

//1
const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/"../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    path: '/lazyload/*',//2
    to: '/lazyload/',//3
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]

/*
  Aclaraciones:
  
  1 - Para hacer el siguiente import, tengo que hacer un "export default" dentro del componente

  2 - Lazyload es parte de la ruta, todo lo que venga despues va a ser procesado por el path lazyload.

  3 - Para navegar, voy a navegar aca
*/