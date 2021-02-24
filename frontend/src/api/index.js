import axios from "axios";

const URL = "http://localhost:5000";
const PRODUCTS = `${URL}/api/products/`;
const AUTH = `${URL}/api/auth/`;

export async function getProducts() {
  try {
    const response = await axios.get(PRODUCTS)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(obj) {
  try {
    const response = await axios.post(AUTH, obj)
    return response
  } catch (error) {
    console.log(error);
  }
}