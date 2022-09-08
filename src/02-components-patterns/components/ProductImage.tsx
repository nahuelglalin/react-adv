import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: any;
  activeClass?: any;
  style?: any;
}

//Con ese parametro, hago que la imagen sea opcional
//Un string vacio para un ternario es considerado que no tiene valor
export const ProductImage = ({ img = "", className, style }: Props) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" />
  )
}


