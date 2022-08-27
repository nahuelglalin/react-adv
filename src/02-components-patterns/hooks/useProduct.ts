import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    //Esta lógica es para que el counter nunca sea menor a 0
    setCounter((prev: any) => Math.max(prev + value, 0))
  }

  return {
    counter,
    increaseBy
  }
}
