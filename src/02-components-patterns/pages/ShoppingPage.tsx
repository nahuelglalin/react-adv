import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>
        ShoppingPage
      </h1>
      <hr />

      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        {/* Compound Component Patterns */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Café'} />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Forma default de trabajar los childrens */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage