import { useMemo} from "react";

const FilterViewer = ({filters={},onChange=null,category = []}) => {
   
    const FILTER_LIST = [
        {id : 1,
        getLabel (filters) {
            return 'Giao Hàng Miễn Phí';
        },
        isActive  (filters) {
            return filters.isFreeShip;
        },
        isVisible (filters){
            return true
        },
        isRemovable :false,
        onRemove  (filters) {
        },
        onToggle  (filters) {
            const newFillter = {...filters};
            if(newFillter.isFreeShip){
                delete newFillter.isFreeShip;
            }else{
                newFillter.isFreeShip = true;
            }
            return newFillter;
        },
        },

        {id : 2,
        getLabel () {
            return 'Có Khuyến Mãi';
        },
        isActive  (filters) {
            return true;
        },
        isVisible (filters){
            return Object.keys(filters).includes('isPromotion') && filters.isPromotion;
        },
        isRemovable :true,
        onRemove (filters) {
            const newFillter = {...filters};
            if(newFillter.isPromotion){
                delete newFillter.isPromotion;
            }
            return newFillter;
        },
        onToggle  (filters) {
    
        },
        },

        {id : 3,
        getLabel (filters) {
            return 'Giá Từ ' + filters.salePrice_gte + ' đến ' + filters.salePrice_lte + ' đồng';
        },
        isActive  (filters) {
            return true
        },
        isVisible (filters){
            return Object.keys(filters).includes('salePrice_lte') || Object.keys(filters).includes('salePrice_gte' || filters.salePrice_gte !== filters.salePrice_lte);
        },
        isRemovable :true,
        onRemove  (filters) {
            const newFillter = {...filters};
            if(newFillter.salePrice_lte && newFillter.salePrice_gte){
                delete newFillter.salePrice_lte;
                delete newFillter.salePrice_gte;
            }
            return newFillter;
        },
        onToggle  (filters) {
        
        },
        },

        {id : 4,
        getLabel (filters) {
            if(!filters['category.id']){
                return;
            }
            if(filters['category.id'] && category[filters['category.id'] - 1]){
                const label = category[filters['category.id'] - 1].name;
                return label
            }
        },
        isActive  (filters) {
            return true
        },
        isVisible (filters){
            return Object.keys(filters).includes('category.id');
        },
        isRemovable :true,
        onRemove  (filters) {
            const newFillter = {...filters};
            if(newFillter['category.id']){
                delete newFillter['category.id'];
            }
            return newFillter;
        },
        onToggle  (filters) {
        
        },
        },
        
    ]
    const visibleFilters = useMemo(()=>{
        return FILTER_LIST.filter((x)=>x.isVisible(filters));
    },[filters])


    return ( 
        <div className="filter_viewer">
            <ul className='viewer_list'>
               {visibleFilters.map((filter)=>{
                    return (
                        <li 
                        key={filter.id} className={filter.isActive(filters) ? 'bg-primary text-white' : ''}
                        onClick={filter.isRemovable ? null : ()=>{
                            const newFillter = filter.onToggle(filters);
                            onChange(newFillter);
                        }}
                        >
                        <label>{filter.getLabel(filters)}</label>
                        {filter.isRemovable && <span className="remove" 
                        onClick={()=>{
                            const newFillter = filter.onRemove(filters);
                            onChange(newFillter);
                        }}>x</span>}
                        </li>
                    )
               })}
            </ul>
        </div>
    );
}
 
export default FilterViewer;
