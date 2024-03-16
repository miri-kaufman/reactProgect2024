import axios from "axios";

let baseUrl = "http://localhost:4000/order";

export const addOrder = (order) => {
  return axios.post(`${baseUrl}`,order)
};