/*
  Esto vendria a ejemplificar como un usuario va a consumir mi componente
 */

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css';
import { useState } from 'react';

const product1: Product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png"
}

const product2: Product = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png"
}

const products: Product[] = [product1, product2];

//Esta nueva interfaz, va a tener todas las propiedades del Product normal
//pero ahora también va a tener una prop llamada count.
interface ProductInCart extends Product {
  count?: number;
}

export const ShoppingPage = () => {

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
    setShoppingCart(oldShoppingCart => {

      //Este if tiene como objetivo no disparar un evento si el counter es 0 
      if (count === 0) {

        //De oldShoppingCart, agarro el "index" [product.id]. Eso me trae todo el objeto
        //que tiene el id numero 1. Y luego, desestructuro el resto de cosas
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;

        console.log({ toDelete });

        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      };
    })

  }


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{
            width: '100px'
          }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product1}
          className="bg-dark text-white"
          style={{
            width: '100px'
          }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>

      <div>
        <code>
          {JSON.stringify(shoppingCart, null, 2)}
        </code>
      </div>
    </div>
  )
}

export default ShoppingPage