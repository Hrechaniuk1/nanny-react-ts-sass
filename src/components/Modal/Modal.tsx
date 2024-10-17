// general import
import { FC, ReactNode } from "react"
import ReactDOM from 'react-dom';

// styles
import css from './Modal.module.scss'

// types
interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
  }

//   component 

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
    if (!isOpen) return null;
  
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;
  
    return ReactDOM.createPortal(
      <div className={css.modal}>

          {children}

      </div>,
      portalRoot
    );
  };

  export default Modal
