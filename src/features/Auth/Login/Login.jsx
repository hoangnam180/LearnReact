import { useState,useContext} from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import LoginForm from "../LoginForm/LoginForm";
import { login } from "../userSlice";

const Login = ({setModal,toastContext}) => {
    const [show,setShow] = useState(false)
    const dispatch = useDispatch()
    const toast = useContext(toastContext)

    const handlesubmit = async (values) =>{
        try {
            const action = login(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            //---/
            console.log('newUser',user)
            //---/
            setModal(false)

        } catch (error) {
            setModal(true)
            toast.setBackground('danger')
            toast.setToast(true)
            toast.setMessHead('Login Error !')
            toast.setMess(error.message)
            console.log('Err,',error)
        }
    }
    return ( 
    <>  
        <LoginForm show={show} onSubmit={handlesubmit}/>
        <input onChange={()=>{setShow(!show)}} id={'show'} name='showpassword' type='checkbox' /> <label htmlFor="show">Show Password</label>
        {/* <button onClick={()=>{setModal(false)}} className="btn btn-warning">Cancel</button> */}
        <div 
        onClick={()=>{setModal(false)}}
        className="close" >
        <i class="fal fa-times"></i>
        </div>
    </>        
     );
}
 
export default Login;