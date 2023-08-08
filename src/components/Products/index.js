import React, { useEffect, useState } from 'react'
import './index.css'
import MyCard from '../card';
import { handelDeleteItem } from '../../utils/changeData';
import { getProducts } from '../../services/product.service';
function Products({setIsChange, isUpdate,isChange, setIsUpdate, setItem }) {
    const [myProducts, setProducts] = useState([]);
    const getAllProducts=async (id)=>{
        try {    
            const {data}= await  getProducts();
            setProducts(data);    
        } catch (error) {
            console.log(error)
        }    
    }
   
    useEffect(() => {
        getAllProducts();
    }, [isChange,isUpdate])

    const handelDelete = (id) => {
        handelDeleteItem(id,isChange)
        setTimeout(() => {
            setIsChange(!isChange);
        }, 400);
       
    }



    return (
        <div className='products'>
    <div className="heading">
        <h2>My Products</h2>
    </div>
    <div className="content">
        {myProducts &&
            myProducts.map((item, i) => {
                if (item.name !== '') {
                    return (
                        <MyCard
                            key={item._id}
                            setItem={setItem}
                            item={item}
                            handelDeleteItem={handelDelete}
                            setIsUpdate={setIsUpdate}
                        />
                    );
                }
                return null; 
            })}
    </div>
</div>

    )
}

export default Products