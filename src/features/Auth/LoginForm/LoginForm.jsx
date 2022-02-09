import {useForm} from 'react-hook-form'
import InputField from 'components/form-control/InputField/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from 'components/Loading/Loading';
import './registerform.scss';
import * as yup from "yup";


    const schema = yup.object().shape({
          identifier : yup
          .string()
          .required("email is a requite field")
          .email()
          ,
          password: yup.string().required(),
    });
    
    const LoginForm = (props) => {
        const {register,handleSubmit,formState: { errors,isSubmitting } } = 
        useForm({ resolver: yupResolver(schema) })
        const {onSubmit,show} = props
    
        const handlesubmit = async (value)=>{
            if(onSubmit){
               await onSubmit(value)
            }
        }
        return (
            <>
                <div className="avatar">
                    <i className="fas fa-lock"></i>
                    <h4>Sign in</h4>
                    {isSubmitting && <Loading/>}
                </div>
                <form onSubmit={handleSubmit(handlesubmit)}>

                  <div className="form-group">
                    <label className='label-1' htmlFor="exampleInputEmail1">Email address</label>
                    <InputField  defaultValue='' name="identifier" register={register} type="text"/>
                        {errors.identifier && 
                        <p className="error">{errors.identifier?.message}</p>}
                </div>

                <div className="form-group">
                <label className='label-1' htmlFor="exampleInputPassword1">Password</label>
                <InputField name="password" register={register} type={show ? 'text' : 'password'}/>
                    {errors.password && 
                    <p className="error">{errors.password?.message}</p>}
                </div>
                <button 
                disabled={isSubmitting}
                type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </>
        );
}
 
export default LoginForm;