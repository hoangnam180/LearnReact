import { formatPrice } from 'utils';
import './ProductInfo.scss';
const ProductInfo = ({product = {}}) => {
    const {name,shortDescription,salePrice,originalPrice,promotionPercent} = product;
    return (  
        <div className="product-info">
           <h4 className="product-title">{name}</h4>
           <p className="product-description">{shortDescription}</p>
        <div className="product-pricebox">
           <span className="product-price">{formatPrice(salePrice)}</span>
            {promotionPercent > 0 && (
                <>
                    <span className="product-originalprice">{`-${formatPrice(originalPrice)}`}</span>
                    <span className="product-promotionpercent">{`-${promotionPercent}%`}</span>
                </>
            )}
        </div>
        </div>
    );
}
 
export default ProductInfo;