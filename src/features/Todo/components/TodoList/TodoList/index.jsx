import classnames from 'classnames'
import './todoList.scss'
const TodoList = ({todos,onTodoClick}) => {
    const handleClick = (todo,index)=>{
        if(onTodoClick){
            onTodoClick(todo,index)
        }
    }
    return (  
        <ul className='todo-list'>
            {todos.map((todo,index)=>(
                <li 
                className={classnames(
                    {
                        'todo-item': true,
                         completed: todo.status === 'completed' 
                    }
                )}
                onClick={()=>{handleClick(todo,index)}}
                key={index}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}
 
export default TodoList;