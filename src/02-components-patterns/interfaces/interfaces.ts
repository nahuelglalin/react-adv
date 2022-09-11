
//Props que van a manejar los componentes

import { Props as ProductCardProps } from "../components/ProductCard";
import {Props as ProductTitleProps} from "../components/ProductTitle"; 
import {Props as ProductImageProps} from "../components/ProductImage"; 
import {Props as ProductButtonsProps} from "../components/ProductImage"; 



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
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}   

//Argumentos que va a recibir el onChange
export interface onChangeArgs {
  product: Product;
  count: number;
}


/*
Para saber los tipos de dato que puse aca, fui al index.ts de 
../components, y me pare sobre los tipos de datos de la
constante ProductCard
*/
