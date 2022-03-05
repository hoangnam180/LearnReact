import { THUMBMAIL_PLACEHOLDER } from "constants/index";
import { STATIC_HOST } from "constants/index";
const ProductThumnail = ({product}) => {

    const urlThumnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBMAIL_PLACEHOLDER;

    return ( 
        <div className="product-thumnail">
            <img width="100%"  src={urlThumnail} alt=""/>
        </div>
     );
}
 
export default ProductThumnail;