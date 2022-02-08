import Toasts from "components/Toasts/Toast";
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
        
        const toast = useContext(toastContext)

        useEffect(() => {    
            const timeToast = setTimeout(() => {
                 toast.setToast(false)
             }, 3500);
     
           return () => {
             clearTimeout(timeToast)
           };
         }, [toast.toast]);
         console.log(modal)
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
                    <Register toastContext={toastContext} setModal={setModal}/>
                </ModalBody>
                
            </Modal>
        </div>
        
        </div>
    </header>
     );
}

export default Header;