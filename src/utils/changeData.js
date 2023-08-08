import { deleteProduct, updateMyProduct } from "../services/product.service";

export const updateProduct = async (value, id) => {
    try {
        await updateMyProduct(value,id)
    } catch (error) {
        console.log(error)
    }
    return;


}

export const handelDeleteItem = async (id, isChange) => {
    try {
        await deleteProduct(id);
        return isChange;
    } catch (error) {
        console.log(error);
    }

}

