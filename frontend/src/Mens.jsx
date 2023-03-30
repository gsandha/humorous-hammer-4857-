import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getMensData } from "./Redux/products/action";
const Mens = () => {
  const { products, loading } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMensData());
  }, []);
  console.log(products);
  return <div></div>;
};

export default Mens;
