import products from "API/products";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await products.get(productId);
                setProduct(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        })()
    }
    ,[productId]);
    return {product,loading}
}