import axios from "axios";
export const addProduct=(data)=>axios.post('https://crud-api-omega.vercel.app/product/',data);
export const getProducts= ()=>axios.get(`http://crud-api-omega.vercel.app/product/`);
export const deleteProduct= (id)=>axios.delete(`http://crud-api-omega.vercel.app/product/${id}`);
export const updateMyProduct= (data,id)=>axios.put(`http://crud-api-omega.vercel.app/product/${id}`,data);