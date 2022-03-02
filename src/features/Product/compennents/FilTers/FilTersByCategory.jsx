import categoryApi from "API/category";
import { useEffect, useState } from "react";
import './Filters.scss'
const FilterByCategory = ({onChange,getLabelCategories}) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {   
        (
            async () => {
                try {
                    const response = await categoryApi.getAll()
                    setCategory(response.map((x)=>{
                        return {
                            id: x.id,
                            name: x.name
                        }
                    }));
                } catch (error) {
                    console.log('Fail to get category', error);
                }
            }
        )()}, []);
        getLabelCategories(category);
    return ( 
        <div className="category"><h5>DANH MỤC SẢN PHẨM</h5>
            <ul className="category_list">
                {category.map((category)=>{
                    return <li className="category_item" key={category.id} 
                    onClick={()=>{
                        onChange(category.id)}}
                    >{category.name}</li>
                }
                )}
            </ul>
        </div>
     );
}
 
export default FilterByCategory;