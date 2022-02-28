import './Filters.scss'
const FilterByService = ({fillter,onChange}) => {

    const handleChange = (event) => {
        if(onChange){
            onChange({[event.target.name]: event.target.checked});
        }
    }
    return (  
        <div className='service' style={{marginTop:'10px'}}>
            <h5>Dịch vụ</h5>   
            <ul className='service_list'>
                {[{value:'isPromotion',label:'Có khuyến mãi'},{value:'isFreeShip',label:'Vận chuyện miễn phí'}].map(service =>(
                    <li key={service.value}>
                        <input id={service.value} checked={Boolean(fillter[service.value])} type="checkbox" name={service.value} onChange={handleChange}/>
                        <label htmlFor={service.value}>{service.label}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default FilterByService;