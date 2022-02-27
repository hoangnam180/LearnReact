import { THUMBMAIL_PLACEHOLDER } from 'constants';
import { STATIC_HOST } from 'constants';
import React from 'react';
import styles from  './ProductList.module.scss';
const ProductList = (productsList) => {
    const data =  productsList.productsList;
    const urlThumnail = (index)=>{
        return data[index].thumbnail ? `${STATIC_HOST}${data[index].thumbnail?.url}` : THUMBMAIL_PLACEHOLDER;
    }
    
    return (
        <div className={styles.contaner}>
            <div className="row g-0">
            {data.map((item, index) => (
                  <div key={item.id} className="col-sm-12 col-md-4 col-lg-3 mb-4">
                  <div className="card p-3">
                  <img width={'100%'} src={urlThumnail(index)} className="card-img-top" alt="" />
                  <div className="card-body">
                      <h5 className={`card-title ${styles.card_title}`}>{item.name}</h5>
                      <p className='card-price'>
                      <span style={{fontWeight:600,fontSize:'16px',marginRight:'5px'}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.salePrice)}</span> 
                      <span>{item.promotionPercent > 0 ? `-${item.promotionPercent}%` : ''}</span>
                      </p>
                      {/* <p className="card-text">{item.description}</p> */}
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                  </div>
                  </div>
            ))}
            </div>
        </div>
    );
};

export default ProductList;