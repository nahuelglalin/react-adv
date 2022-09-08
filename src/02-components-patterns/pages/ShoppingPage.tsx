import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        {/* Compound Component Patterns */}
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* Forma default de trabajar los childrens */}
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* Forma default de trabajar los childrens */}
        <ProductCard
          product={product}
          style={{ backgroundColor: '#70d1f8' }}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{
            fontWeight: 'bold'
          }} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage