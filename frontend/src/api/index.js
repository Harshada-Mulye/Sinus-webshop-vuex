import axios from "axios";

const URL = "http://localhost:5000";
const PRODUCTS = `${URL}/api/products/`;
const REGISTER_USER = `${URL}/api/register/`;
const AUTH = `${URL}/api/auth/`;
const USER = `${URL}/api/me`;

export async function getProducts() {
  try {
    const response = await axios.get(PRODUCTS)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(obj) {
  try {
    const response = await axios.post(REGISTER_USER, obj)
    /* Console log kan tas bort sen */
    console.log(response)
  } catch (error) {
    console.log(error);
  }
}

export async function login(obj) {
  try {
    const response = await axios.post(AUTH, obj)
    setToken(response.data.token);
    /* Console log kan tas bort sen */
    console.log(response.data.token)
  } catch (error) {
    console.log(error)
  }
}

export function setToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function getUser() {
  const response = await axios.get(USER)
  return response
}