import {useDispatch, useSelector} from 'react-redux'
import { decrease, increase } from './counterSlice'

const Couter = () => {
const counter =  useSelector(state => state.count)
const dispatch = useDispatch()    
const handleIncrease = ()=>{
    dispatch(increase())
}
const handleDecrease = ()=>{
    dispatch(decrease())
}
return ( 
        <div>
           <h1>count : {counter}</h1>
           <button 
           onClick={handleIncrease}
           style={{display:'block',marginBottom:'10px'}}
           >Increase
           </button>
           <button
           onClick={handleDecrease}
           >Decrease
           </button>
        </div>
     );
}
 
export default Couter;