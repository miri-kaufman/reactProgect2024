import axios from "axios";

let baseUrl = "http://localhost:4000/user";

export const login = (user) => {
  return axios.post(`${baseUrl}/login`,user);
}
export const signUp=(user)=>{
  return axios.post(`${baseUrl}/SignUp`,user)
}
;