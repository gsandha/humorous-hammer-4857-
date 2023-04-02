import * as types from "./types";
import axios from "axios";

export const getMensData = (searchValue, getProductParam) => (dispatch) => {
  if (searchValue == null) {
    searchValue = "";
  }
  //  https://shopkaro-backend.onrender.com/mens
  // console.log("getparam", getProductParam.params.category);

  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`https://shopkaro-backend.onrender.com/mens`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.PRODUCT_ERROR, payload: e }));
};
