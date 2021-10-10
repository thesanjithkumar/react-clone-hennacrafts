import classes from './product_description.module.css';
import ReactDom from 'react-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';



function Modal(props)
{
  if(!props.isModalOpen) return null;
  return ReactDom.createPortal(
    <>
    <RemoveScrollBar /> 
    <div className={classes.overlay} onClick={()=>{props.setIsModalOpen(false)}}/>
    <div className={classes.modal}>
      {props.children}
    </div>
    </>,
    document.getElementById("portal")
  )
}

export default Modal;