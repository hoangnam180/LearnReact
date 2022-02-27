import { useState } from "react";

const FilterByPrice = ({onChange}) => {

    const [value, setValue] = useState({
        salePrice_gte:null,
        salePrice_lte:null
    });


    const handleChange = (event) => {
        setValue((prevState) => {
            return {...prevState, [event.target.name]: event.target.value};
        });
    }
    const handlesubmit = () => {
        if(onChange){
            onChange(value);
        }
    }
    return (  
        <>
            <h5>Chọn khoảng giá</h5>   
           <div className="row">
                <div className="col-md-6">
                <input type={'text'} name={'salePrice_gte'} value={value.salePrice_gte} onChange={handleChange}/>
                </div>
                <span>-</span>
                <div className="col-md-6">
                <input type={'text'} name={'salePrice_lte'} value={value.salePrice_lte} onChange={handleChange}/>
                </div>
                <div className="col-md-12 mt-2">
                <button className="btn-primary p-1"
                onClick={handlesubmit}
                >Áp Dụng</button>
                </div>
           </div>
        </>
    );
}
 
export default FilterByPrice;