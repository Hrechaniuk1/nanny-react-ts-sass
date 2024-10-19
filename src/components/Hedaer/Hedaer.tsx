import { FC, useState } from "react"; 
import { Link } from "react-router-dom"

// component imports 
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import Modal from "../../components/Modal/Modal";

// types

// styles

import css from './Header.module.scss'

interface HeaderProps {
    customStyles?: React.CSSProperties; // Используем встроенный тип
  }


const Header: FC<HeaderProps> = ({customStyles}) => {

    const [loginModalIsOpnen, setLoginModalIsOpen] = useState(false)
    const [regModalIsOpnen, setRegModalIsOpen] = useState(false)

    function loginClickHandler() {
        setLoginModalIsOpen(true)
    }

    function regClickHandler() {
        setRegModalIsOpen(true)
    }

    return (
        <>
        <header style={customStyles} className={css.header}>
            <div className={css.logoSection}><Link className={css.mainLink} to='/'>Nanny.Services</Link></div>
            <div className={css.linkSection}>
                <ul className={css.linkList}>
                    <Link className={css.link} to='/'>Home</Link>
                    <Link className={css.link} to='/nannies'>Nannies</Link>
                </ul>
                <ul className={css.btnList}>
                    <li><button onClick={loginClickHandler} className={css.loginBtn}>Login</button></li>
                    <li><button onClick={regClickHandler} className={css.regBtn}>Registration</button></li>
                </ul>
            </div>
        </header>
        <Modal isOpen={loginModalIsOpnen}>
            <LoginModal isOpen={setLoginModalIsOpen} ></LoginModal>
        </Modal>
        <Modal isOpen={regModalIsOpnen}>
            <RegistrationModal isOpen={setRegModalIsOpen}></RegistrationModal>
        </Modal>
        </>
    )

}

export default Header