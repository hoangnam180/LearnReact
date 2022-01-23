import {useForm} from 'react-hook-form'
import InputField from "../../../../../components/form-control/InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object().shape({
    title: yup
      .string()
      .required("Vui lòng nhập Công việc")
      .max(50, "username tối đa 50 ký tự"),
      password: yup.string().required().min(6),
      passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match').min(6)
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
            <InputField name="password" register={register} type="password"/>
            {errors.password && 
            <p className="error">{errors.password?.message}</p>}
            <InputField name="passwordConfirmation" register={register} type="password"/>
            {errors.passwordConfirmation && 
            <p className="error">{errors.passwordConfirmation?.message}</p>}
        </form>
    );
}
 
export default TodoForm;