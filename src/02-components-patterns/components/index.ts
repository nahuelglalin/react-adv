import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
// export { ProductCard } from './ProductCard';

//Explicacion abajo
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});

export default ProductCard;

/*
Estamos exportando el ProductCard de esa forma para que el dev que
consuma los componentes, los llame de la siguiente manera:

  <ProductCard product={product}>
    <ProductCard.Image />
    <ProductCard.Title title={'Café'} />
    <ProductCard.Buttons />
  </ProductCard>

Esta forma de llamar a los componentes se llama
"Compound Component Patterns"
*/
