// general import
import { FC, ReactNode, useEffect } from "react"
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

  useEffect(() => {
    if (isOpen) {
        document.body.classList.add(css.bodyFixed);
    } else {
        document.body.classList.remove(css.bodyFixed);
    }

    return () => {
        document.body.classList.remove(css.bodyFixed);
    };
}, [isOpen]);

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
