import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: any;
  title?: string;
  activeClass?: any;
  style?: any;
}

//Este param es un title optional, de type string
export const ProductTitle = ({ title, className, style }: Props) => {

  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  )
}