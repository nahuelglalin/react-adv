import { useState, useEffect, useRef } from "react";
import { onChangeArgs, Product } from '../interfaces/interfaces';

//Este es el objeto que tiene que recibir el hook useProduct
interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}


//Hook para trabajar sobre el ProductCard. Hace que cuando el usuario toca click para modiciar
//el valor del contador, emita un valor
export const useProduct = ( {onChange, product, value = 0}: useProductsArgs ) => {
  const [counter, setCounter] = useState(value);

  //transformo el conChange en un boolean. Googlear como funciona el doble !!
  const isControlled = useRef<boolean>( !!onChange );
  

  const increaseBy = (value: number) => {

    //si mi componente SI recibe el param onChange, ejecuta esto
    if (isControlled.current ){
      return onChange!({count: value, product});
    }

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

  //el value es el numero de items que tiene cada Card. El numero que se
  //incrementa tocando los botones
  useEffect(() => {
    setCounter(value);  
  }, [value]);
  

  return {
    counter,
    increaseBy
  }
}
