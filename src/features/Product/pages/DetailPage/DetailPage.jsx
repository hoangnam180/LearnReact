import Loading from "components/Loading/Loading";
import ProductInfo from "features/Product/compennents/ProductInfo/ProductInfo";
import ProductThumnail from "features/Product/compennents/ProductThumnail/ProductThumnail";
import useProductDetail from "features/Product/hooks/useProductDetail";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import './DetailPage.scss';
const DetailPage = (props) => {
    const params = useParams()
    const productId= params.productid;
    const {product,loading} = useProductDetail(productId);
    console.log(product);
    if(loading){
        return (
            <div className="d-flex align-items-center justify-content-center">
                <Loading/>
            </div>
        )
    }
    return ( 
            <Row className="bg-white">
                <Col className="left_detailPage">
                    <ProductThumnail product={product}/>
                </Col>
                <Col className="right_detailPage">
                    <ProductInfo product={product}/>
                </Col>
            </Row>       
     );
}
 
export default DetailPage;