import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";


//Este param es un title optional, de type string
export const ProductTitle = ({ title }: { title?: string }) => {

  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}