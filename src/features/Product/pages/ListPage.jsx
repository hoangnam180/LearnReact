import { Col, Row } from "reactstrap";
import {useEffect, useRef, useState} from 'react';
import products from '../../../API/products';
import ProductList from '../compennents/ProductList/ProductList';
import ProductSkeletonList from "../compennents/ProductSkeletonLists/ProductSkeletonList";
import './ListPage.scss';
import Pagination from "../compennents/Pagination/Pagination";
import Tabss from "../compennents/Tabs/Tabs";
import Tabs from "../compennents/Tabs/Tabs";

const ListPage = () => {
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fillter, setFillter] = useState({_page:1, _limit:20, _sort:"salePrice:ASC"});
    const [pagination, setPagination] = useState({
        page:1,
        limit:20,
        total:0,
    });
    useEffect(() => {
        (async () => {
            try{
                const response = await products.getAll(fillter);
                setProductsList(response.data);
                setPagination(response.pagination);
            }catch(error){
                console.log('Fail to get products', error);
            }
            setLoading(false);
        })();
    },[fillter]);

    const handlePageChange = (page) => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
        setFillter((prevState) => {
            return {...prevState, _page: page};
        });
    }

    const handleSortChange = (newValue) => {
        setFillter((prevState) => {
            return {...prevState, _sort: newValue};
        });
    }
    
    const handleCount = () => {
        if(pagination.total && pagination.limit){
            return Math.ceil(pagination.total/pagination.limit);
        }
    }
    const count = handleCount() || 1;

    return (  
            <Row>
                <Col className="left_product">tesst</Col>
                <Col className="right_product">
                    <h3 style={{paddingLeft:'20px'}}>Sắp Xếp Theo</h3>
                    <Tabs currentSort={fillter._sort} onChange={handleSortChange}/>
                    {loading ?  <ProductSkeletonList /> : <ProductList productsList={productsList}  />} 
                    <Pagination count={count} page={pagination.page} onPageChange={handlePageChange}
                    />
                </Col>
            </Row>           
    );
}
 
export default ListPage;