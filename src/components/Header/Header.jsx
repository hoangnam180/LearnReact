import Toasts from "components/Toasts/Toast";
import Register from "features/Auth/Register/Register";
import Login from "features/Auth/Login/Login";
import { useContext, useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink ,Link} from "react-router-dom";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody } from "reactstrap"
import './Header.scss'
import { logout } from "features/Auth/userSlice";


const Header = ({toastContext}) => {
        const loggedInUser = useSelector(state => state.user.current);
        const isLogeedIn = !!loggedInUser.id;
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

        const [menu, setMenu] = useState(false)

        const dispatch = useDispatch()

        const handleLogoutClick = () => {
          const action = logout()
          dispatch(action)
          toast.setToast(true)
          toast.setBackground('success')
          toast.setMessHead('Logout Success !')
          toast.setMess('Bạn đã đăng xuất thành công!!')
       }
        const [mode,setMode] = useState(MODE.login)
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
        <p><NavLink to="/products">Products</NavLink></p>
        <div className="header__register">
        <div className="header-menu">
                    <Dropdown isOpen={menu}>
                    <DropdownToggle caret>
                    {isLogeedIn && 
                      <Button
                      onClick={() => setMenu(!menu)}
                      style={{outline:'none',backgroundColor:'rgb(162 223 200 / 40%)',borderRadius:'50%',border:'none',color:'#fff'}}>
                          <i class="fas fa-user-circle"></i>
                      </Button>
                    }
                    {!isLogeedIn && 
                    (<Button style={{backgroundColor:'#A2DFC8',border:'none',color:'#333'}}
                    onClick={toggle}>Login</Button> )
                    }
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={handleLogoutClick}>
                        Logout
                      </DropdownItem>
                      <DropdownItem>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
        </div>
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