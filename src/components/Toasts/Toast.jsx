import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import './toast.scss'
function Toasts({open,bg,mess,messHead}) {
    console.log(open)
    return (
        <div className={open ? 'toast-container open' : 'toast-container'}>
            <Toast isOpen={true}>
            <ToastHeader className={`bg-${bg} text-white`}>
               {messHead}
            </ToastHeader>
            <ToastBody className='bg-white'>
               {mess}
            </ToastBody>
            </Toast>
        </div>

    );
}

export default Toasts;
