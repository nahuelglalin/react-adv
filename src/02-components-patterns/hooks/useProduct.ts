import { useState } from "react";
import { onChangeArgs, Product } from '../interfaces/interfaces';

//Este es el objeto que tiene que recibir el hook useProduct
interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}


//Hook para trabajar sobre el ProductCard. Hace que cuando el usuario toca click para modiciar
//el valor del contador, emita un valor
export const useProduct = ( {onChange, product}: useProductsArgs ) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {

    //Esta lógica es para que el counter nunca sea menor a 0
    const newValue = Math.max(counter + value, 0)

    //Cambio el state
    setCounter(newValue)

    //Llamo a la func onChange recibida por params
    //si onChange es != de undefined, ejecutamelo
    onChange && onChange({count: newValue, product});
    //El onChange es una funcion que recibe 2 params. Acá la estoy llamando, pasandole
    //el counter, y el producto
  }

  return {
    counter,
    increaseBy
  }
}
