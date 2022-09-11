import { createContext, ReactElement, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';

import styles from "../styles/styles.module.css";

import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
  className?: any;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

//Creo el context para manejar la informacion entre componentes
//El provider va a envolver a todos mis componentes hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange }: Props) => {

  //Este state cambia el contador
  //el useProduct recibe por parametros la funcion onChange recida por params en el ProductCard,
  //y también el producto recibido en el mismo lugar.
  const { counter, increaseBy } = useProduct({ onChange, product });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        style={style}
        className={` ${styles.productCard} ${className}`}
      >
        {children}
      </div>
    </Provider>
  )
}

//Esto es para trabajar con Compound Component Patterns
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;