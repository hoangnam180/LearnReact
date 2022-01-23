import { useEffect, useMemo, useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";
import queryString from 'query-string'
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoList/TodoForm/TodoForm";
const ListPage = () => {
    const [todos,setTodos] = useState(
        [
            {
                title : 'Leart React',
                status : 'new'
            },
            {
                title : 'Leart Javascript',
                status : 'completed'
            },
            {
                title : 'Leart English',
                status : 'new'
            }
        ]
    )

    const navigate = useNavigate()
    const location = useLocation();

    const  [filterStatus,setFilteStatus] = useState(()=>{
        const params = queryString.parse(location.search);
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteStatus(params.status || 'all') 
    }, [location.search])
    
    const handleTodoClick = (todo,index)=>{
        const newTodos = [...todos];
         newTodos[index] = {
            ...newTodos[index],
            status : newTodos[index].status === 'new' ? 'completed' : 'new'
        }
        
        setTodos(newTodos)
    }

    const handleShowOnClick = ()=>{
        // setFilteStatus('all')  
        const queryParams = {status :'all'}       
        navigate({
            search : queryString.stringify(queryParams)
        })
    }

    const handleShowCompletedClick = ()=>{
        // setFilteStatus('completed')   
        const queryParams = {status :'completed'}       
        navigate({
            search : queryString.stringify(queryParams)
        })     
    }

    const handleShowNewClick = ()=>{
        // setFilteStatus('new')     
        const queryParams = {status :'new'}       
        navigate({
            search : queryString.stringify(queryParams)
        })   
    }

    const renderFilter = useMemo(()=>{
       return todos.filter((todo)=>filterStatus === 'all' || todo.status === filterStatus)
    },[filterStatus,todos])
    const handleTodoFormSubmit = (data) =>{
        const newTodo = {title:data.title,status:'new'}
        const newTodos = [...todos,newTodo]
        setTodos(newTodos)
    }
    return (  
        <>
            <h3>What todo</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <h1>Todo List</h1>
            <TodoList todos={renderFilter} onTodoClick={handleTodoClick}/>
            <div>
            <button onClick={handleShowOnClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </>
    );
}
 
export default ListPage;