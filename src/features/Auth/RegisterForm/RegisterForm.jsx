import {useForm} from 'react-hook-form'
import InputField from 'components/form-control/InputField/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from 'components/Loading/Loading';
import './registerform.scss';
import * as yup from "yup";


    const schema = yup.object().shape({
        fullName: yup
          .string()
          .required("fullame is a requite field")
          .min(3)
          .max(50),
          email : yup
          .string()
          .required("email is a requite field")
          .email()
          ,
          password: yup.string().required().min(6),
          passwordConfirmation: yup.string()
         .oneOf([yup.ref('password'), null], 'Passwords must match').min(6)
    });
    
    const RegisterForm = (props) => {
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
                    <h4>Create An Account</h4>
                    {isSubmitting && <Loading/>}
                </div>
                <form onSubmit={handleSubmit(handlesubmit)}>

                <div className="form-group">
                    <label className='label-1' htmlFor="exampleInputFullName">Full Name</label>
                    <InputField  defaultValue='' name="fullName" register={register} type="text"/>
                        {errors.fullName && 
                        <p className="error">{errors.fullName?.message}</p>}
                </div> 

                <div className="form-group">
                    <label className='label-1' htmlFor="exampleInputEmail1">Email address</label>
                    <InputField  defaultValue='' name="email" register={register} type="text"/>
                        {errors.email && 
                        <p className="error">{errors.email?.message}</p>}
                </div>

                <div className="form-group">
                <label className='label-1' htmlFor="exampleInputPassword1">Password</label>
                <InputField name="password" register={register} type={show ? 'text' : 'password'}/>
                    {errors.password && 
                    <p className="error">{errors.password?.message}</p>}
                </div>

                <div className="form-group">
                <label className='label-1' htmlFor="passwordConfirmation">Password Confirmation</label>
                <InputField name="passwordConfirmation" register={register} type={show ? 'text' : 'password'}/>
                    {errors.passwordConfirmation && 
                    <p className="error">{errors.passwordConfirmation?.message}</p>}
                </div>
                <button 
                disabled={isSubmitting}
                type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        );
}
 
export default RegisterForm;