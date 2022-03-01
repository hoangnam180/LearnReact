import { useState ,useRef} from "react";
const FilterByPrice = ({onChange}) => {
    const inputRef = useRef()
    const inputRef_lte = useRef()
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
        inputRef.current.value = '';
        inputRef_lte.current.value = '';
        setValue({
            salePrice_gte:null,
            salePrice_lte:null
        });
    }

    return (  
        <>
            <h5>Chọn khoảng giá</h5>   
           <div className="row">
                <div className="col-md-6">
                <input ref={inputRef}  value={value.salePrice_gte} type={'text'} name={'salePrice_gte'} onChange={handleChange}/>
                </div>
                <span>-</span>
                <div className="col-md-6">
                <input ref={inputRef_lte} value={value.salePrice_lte} type={'text'} name={'salePrice_lte'} onChange={handleChange}/>
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
