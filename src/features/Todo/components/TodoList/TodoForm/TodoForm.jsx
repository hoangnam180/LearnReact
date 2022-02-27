import {useForm} from 'react-hook-form'
import InputField from 'components/form-control/InputField/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object().shape({
    title: yup
      .string()
      .required("Vui lòng nhập Công việc")
        .min(3, "Công việc phải có ít nhất 3 ký tự")
});
const TodoForm = (props) => {
    const {setFocus,register,handleSubmit, reset,formState: { errors } } = 
    useForm({ resolver: yupResolver(schema) })
    const {onSubmit} = props

    const handlesubmit = (value)=>{
        if(onSubmit){
            onSubmit(value)
        }
        reset()
        setFocus('title')
    }
    return (  
        <form onSubmit={handleSubmit(handlesubmit)}>
            <InputField  defaultValue='' name="title" register={register} type="text"/>
            {errors.title && 
            <p className="error">{errors.title?.message}</p>}
            <button style={{display:'block'}}>Add</button>
        </form>
    );
}
 
export default TodoForm;