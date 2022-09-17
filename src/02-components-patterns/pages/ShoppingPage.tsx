/*
  Esto vendria a ejemplificar como un usuario va a consumir mi componente
 */

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}// Si todo esto en null, le pongo 0
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
      </div>

      <div className="shopping-cart">
        {
          //Esto me permite obtener las entradas de un objeto. Es para 
          //recorrer el objeto como si fuese un array. 
          //No puedo hacer object.map() pq no existe, entonces lo tengo que "parsear" asi
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{
                width: '100px'
              }}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>

          ))
        }
      </div>
    </div>
  )
}

export default ShoppingPage