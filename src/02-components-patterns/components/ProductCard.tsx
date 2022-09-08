import { createContext, ReactElement, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';

import styles from "../styles/styles.module.css";

import { ProductContextProps, Product } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
  className?: any;
  style?: CSSProperties;
}

//Creo el context para manejar la informacion entre componentes
//El provider va a envolver a todos mis componentes hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style }: Props) => {

  const { counter, increaseBy } = useProduct();

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