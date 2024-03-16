import axios from "axios"
const baseUrl="http://localhost:4000/product";
export const getAllProductFromServer=()=>{
   return axios.get(baseUrl);
}

export const getProductById=(id)=>{
    return axios.get(`${baseUrl}/${id}`);
 }
export const deleteFromBagByAdmin=(id)=>{
   return axios.delete(`${baseUrl}/${id}`)
}
export const updateProduct=(id,pro)=>{
   return axios.put(`${baseUrl}/${id}`,pro)
}
export const addProductByAdmin=(product)=>{
   return axios.post(`${baseUrl}`,product)
}