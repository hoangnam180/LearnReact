import { useState,useContext} from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import RegisterForm from "../RegisterForm/RegisterForm";
import { register } from "../userSlice";

const Register = ({setModal,toastContext}) => {
    const [show,setShow] = useState(false)
    const dispatch = useDispatch()
    const toast = useContext(toastContext)

    const handlesubmit = async (values) =>{
        try {
            values.username = values.email
            const action = register(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            console.log('newUser',user)
            setModal(true)
            toast.setToast(true)
            toast.setBackground('success')
            toast.setMessHead('Register Success Full!')
            toast.setMess('Chúc mừng bạn đã đăng ký thành công!!')

        } catch (error) {
            setModal(true)
            toast.setBackground('danger')
            toast.setToast(true)
            toast.setMessHead('Register Error !')
            toast.setMess(error.message)
            console.log('Err,',error)
        }
    }
    return ( 
    <>  
        <RegisterForm show={show} onSubmit={handlesubmit}/>
        <input onChange={()=>{setShow(!show)}} id={'show'} name='showpassword' type='checkbox' /> <label htmlFor="show">Show Password</label>
        <div 
        onClick={()=>{setModal(false)}}
        className="close" >
        <i className="fal fa-times"></i>
        </div>
    </>        
     );
}
 
export default Register;