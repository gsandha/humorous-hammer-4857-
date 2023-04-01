import * as types from "./types";
import axios from "axios";

export const getMensData = (searchValue, getProductParam) => (dispatch) => {
  if (searchValue == null) {
    searchValue = "";
  }

  console.log(getProductParam);

  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`http://localhost:9090/products`)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.PRODUCT_ERROR, payload: e }));
};
