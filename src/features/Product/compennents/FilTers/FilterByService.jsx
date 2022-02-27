import { useState } from "react";

const FilterByService = ({onChange}) => {

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
            <h5>Dịch vụ</h5>   
        </>
    );
}
 
export default FilterByService;