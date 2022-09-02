import { ReactElement } from "react";

//Props que van a manejar los componentes
export interface ComponentProps {
  product: Product,
  children?: ReactElement | ReactElement[]
}

//Esta es la info que tendra cada Producto
export interface Product {
  id: string;
  title: string;
  img?: string;
}

//Esta es la info que va a tener mi context
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

//Interfaz para el ProductCardHOC
//Para trabajar con Compound Component Patterns
export interface ProductCardHOCProps {
  ({ children, product }: ComponentProps): JSX.Element;
  Title: ({ title }: {title?: string }) => JSX.Element;
  Image: ({ img }: {img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
/*
Para saber los tipos de dato que puse aca, fui al index.ts de 
../components, y me pare sobre los tipos de datos de la
constante ProductCard
*/
