import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import styles from "../styles/styles.module.css";

import { ProductContextProps, ComponentProps as Props } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';


//Creo el context para manejar la informacion entre componentes
//El provider va a envolver a todos mis componentes hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}

//Esto es para trabajar con Compound Component Patterns
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;