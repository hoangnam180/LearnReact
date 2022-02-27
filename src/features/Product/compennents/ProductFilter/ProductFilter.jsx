
import FilterByPrice from "../FilTers/FilterByPrice";
import FilterByService from "../FilTers/FilterByService";
import FilterByCategory from "../FilTers/FilTersByCategory";
import './ProductFilter.scss'

const ProductFilter = (props) => {
    const {fillter,handleFilterChange} = props
    const handleCategoryChange = (newCategoryId) => {
        if(!handleFilterChange){
            return;
        }
        if(handleFilterChange){
            const newFillter = {...fillter, 'category.id': newCategoryId};
        handleFilterChange(newFillter);
        }
    }

    const handleChange = (newPrice) => {
        if(handleFilterChange){
            const newFillter = {...fillter, ...newPrice};
            handleFilterChange(newFillter);
        }
    }
    return ( 
        <div className="filter">
            <FilterByCategory onChange={handleCategoryChange}/>
            <FilterByPrice onChange={handleChange}/>
            <FilterByService fillter={fillter} onChange={handleChange}/>
        </div>
     );
}
 
export default ProductFilter;