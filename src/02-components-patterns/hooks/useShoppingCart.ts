import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

  //State para manejar el valor del carrito
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});


  //Quiero ejecutar esta funcion cada vez que cambie el contador de cada card
  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    //Esta sintaxis me genera un objeto de una sola prop, la key del producto. 
    /*
      { "1": { 
          "id": "1",
          "title": "Coffee Mug - Card",
          "img": "./coffee-mug.png",
          "count": 1 
        } 
      }
     */

    //el count regresa un 1 o un -1, porque incremento el value que está
    //dentro de los botones en 1 o en -1

    console.log({count});

    setShoppingCart(oldShoppingCart => {
      
      //Este if tiene como objetivo no disparar un evento si el counter es 0 
      if (count === 0) {
        //De oldShoppingCart, agarro el "index" [product.id]. Eso me trae todo el objeto
        //que tiene el id numero 1. Y luego, desestructuro el resto de cosas
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      };
      
    })

  }

  return {
    shoppingCart,
    onProductCountChange
  }

}