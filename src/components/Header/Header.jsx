import Toasts from "components/Toasts/Toast";
import Login from "features/Auth/Login/Login";
import Register from "features/Auth/Register/Register";
import { useContext, useState,useEffect } from "react";
import { NavLink ,Link} from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap"
import './Header.scss'


const Header = ({toastContext}) => {
        // Modal open state
        const [modal, setModal] = useState(false);  
        // Toggle for Modal
        const toggle = () => setModal(true);
        //Toast
        const toast = useContext(toastContext)

        const MODE = {
          login : 'login',
          register : 'register',
        }

        const [mode,setMode] = useState(MODE.login)
        console.log(mode)
        //auto remove toast
        useEffect(() => {    
            const timeToast = setTimeout(() => {
                 toast.setToast(false)
             }, 3500);
     
           return () => {
             clearTimeout(timeToast)
           };
         }, [toast.toast]);


    return ( 

    <header className="header">
        <Toasts mess={toast.mess} messHead={toast.messHead} bg={toast.background} open={toast.toast}/>
        <div className="header__logo">
        <Link to="/"><i className="fab fa-codepen"></i></Link>
        </div>
        <div className="header__category">
        <p><NavLink to="/">Home</NavLink></p>
        <p><NavLink to="/todos">Todo List</NavLink></p>
        <p><NavLink to="/albums">albums</NavLink></p>
        <p><NavLink to="/counter">Counter</NavLink></p>
        <div className="header__register">
            <Button style={{backgroundColor:'#A2DFC8',border:'none',color:'#333'}}
                onClick={toggle}>Register</Button>
            <Modal isOpen={modal}
                // toggle={toggle}
              >
                <ModalBody>
                    {mode === MODE.login && (<>
                    <Login toastContext={toastContext} setModal={setModal}/>
                    <Button
                    onClick={()=>{setMode(MODE.register)}}
                     className="btn-outline-info">Dont have an account. Register here</Button>
                    </>)}

                    {mode === MODE.register && (<>
                    <Register toastContext={toastContext} setModal={setModal}/>
                    <Button
                    onClick={()=>{setMode(MODE.login)}}
                     className="btn-outline-info">Already have an account. Login here</Button>
                    </>)}
                </ModalBody>
                
            </Modal>
        </div>
        
        </div>
    </header>
     );
}

export default Header;