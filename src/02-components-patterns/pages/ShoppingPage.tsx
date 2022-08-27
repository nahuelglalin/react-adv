import { ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';


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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={product.title} />
          {/* <ProductButtons /> */}
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage