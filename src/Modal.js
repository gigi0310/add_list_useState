import { useEffect } from "react";

const Modal = ({modalContent, closeModal}) =>{

    // close modal in 3 seconds

    useEffect(()=>{
        setTimeout(()=>{
            closeModal();
        }, 3000)
    })
    return (
        <div style={{backgroundColor:'white', width:"400px", height:'40px', display:'flex', justifyContent:"center", alignItems:'center'}}>
            <p style={{color:'red'}}>{modalContent}</p>
        </div>
    )
}

export default Modal;