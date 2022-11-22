import axios from "axios";

const apiUrl = "../products/products.json";

export const getProducts = () => {
  const res = axios(apiUrl);
  return res;
};