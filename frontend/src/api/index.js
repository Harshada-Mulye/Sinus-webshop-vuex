import axios from "axios";

const URL = "http://localhost:5000";
const PRODUCTS = `${URL}/api/products/`;
const REGISTER_USER = `${URL}/api/register/`;
const AUTH = `${URL}/api/auth/`;
const USER = `${URL}/api/me`;
const ORDERS = `${URL}/api/orders/`;

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
    await axios.post(REGISTER_USER, obj)
  } catch (error) {
    console.log(error);
  }
}

export async function login(obj) {
  try {
    const response = await axios.post(AUTH, obj)
    setToken(response.data.token);
  } catch (error) {
    console.log(error)
  }
}

export function setToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function getUser() {
  try {
    const response = await axios.get(USER)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function getOrders() {
  try {
    const response = await axios.get(ORDERS)
    return response
  } catch (error) {
    console.log(error);
  }
}

export async function postOrders(obj) {
  try {
    const response = await axios.post(ORDERS, obj)
    return response
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${PRODUCTS}${id}`)
    return response
  } catch (error) {
    console.log(error);
  }
}

export async function addProduct(obj) {
  try {
    const response = await axios.post(`${PRODUCTS}`, obj)
    return response 
  } catch (error) {
    console.log(error)
  }
}