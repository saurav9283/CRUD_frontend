import axios from "axios";
export const addProduct=(data)=>axios.post('http://localhost:5000/product/',data);
export const getProducts= ()=>axios.get(`http://localhost:5000/product/`);
export const deleteProduct= (id)=>axios.delete(`http://localhost:5000/product/${id}`);
export const updateMyProduct= (data,id)=>axios.put(`http://localhost:5000/product/${id}`,data);