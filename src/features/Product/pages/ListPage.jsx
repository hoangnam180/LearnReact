import { Col, Row } from "reactstrap";
import {useEffect, useMemo, useState} from 'react';
import queryString from 'query-string';
import products from '../../../API/products';
import ProductList from '../compennents/ProductList/ProductList';
import ProductSkeletonList from "../compennents/ProductSkeletonLists/ProductSkeletonList";
import './ListPage.scss';
import Pagination from "../compennents/Pagination/Pagination";
import Tabs from "../compennents/Tabs/Tabs";
import ProductFilter from "../compennents/ProductFilter/ProductFilter";
import FilterViewer from "../compennents/FilTers/FilterViewer";
import { useLocation, useNavigate } from "react-router-dom";


const ListPage = () => {
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navagation =  useNavigate()
    const location = useLocation();
    const queryParams = useMemo(()=>{
        const params = queryString.parse(location.search);
        return params;
    },[location.search]) 

    const [pagination, setPagination] = useState({
        page:1,
        limit:16,
        total:0,
    });


    useEffect(() => {
        (async () => {
            try{
                const response = await products.getAll(queryParams);
                setProductsList(response.data);
                setPagination(response.pagination);
            }catch(error){
                console.log('Fail to get products', error);
            }
            setLoading(false);
        })();
    },[queryParams]);


    const handlePageChange = (page) => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
        const fillter = {
            ...queryParams,
            _page:page,
        }
        navagation(`/products?${queryString.stringify(fillter)}`);
    }

    const handleSortChange = (newValue) => {
        const fillter = {
            ...queryParams,
            _sort:newValue,
        }
        navagation(`/products?${queryString.stringify(fillter)}`);
    }
    
    const handleFilterChange = (newFillter) => {
        const fillter = {
            ...queryParams,
            ...newFillter,
        }
        navagation(`/products?${queryString.stringify(fillter)}`);
    }
    const handleCount = () => {
        if(pagination.total && pagination.limit){
            return Math.ceil(pagination.total/pagination.limit);
        }
    }

    const setnewFillter = (newFillter) => {
        navagation(`/products?${queryString.stringify(newFillter)}`);
    }

    
    const local_storage = JSON.parse(localStorage.getItem('category')) || [];
    const count = handleCount() || 1;
    const [categoryObj,setCategory] = useState(local_storage);
    const getLabelCategories = (category) => {
        localStorage.setItem('category', JSON.stringify(category));
        setCategory(category);
    }
    

    return (  
            <Row>
                <Col className="left_product"><ProductFilter getCategory={getLabelCategories}  fillter={queryParams} handleFilterChange={handleFilterChange}/></Col>
                <Col className="right_product">
                    <h3 style={{paddingLeft:'20px'}}>Sắp Xếp Theo</h3>
                    <Tabs currentSort={queryParams._sort} onChange={handleSortChange}/>
                    <FilterViewer category={categoryObj} filters={queryParams} onChange={setnewFillter}/>
                    {loading ?  <ProductSkeletonList /> : <ProductList productsList={productsList}  />} 
                    <Pagination count={count} page={pagination.page} onPageChange={handlePageChange}
                    />
                </Col>
            </Row>           
    );
}
 
export default ListPage;
