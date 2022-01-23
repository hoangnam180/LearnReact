import { Link, Outlet } from "react-router-dom";
const TodoFeture = () => {
    return ( 
        <div>
           <Link to='todo'>Todo</Link>
            <Outlet />
        </div>
     );
}
 
export default TodoFeture;