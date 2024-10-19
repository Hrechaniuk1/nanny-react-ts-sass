import { FC, useState, useEffect } from "react"; 
import { Link, useLocation } from "react-router-dom"

// component imports 
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import Modal from "../../components/Modal/Modal";

// types
// styles
import css from './Header.module.scss'


const Header: FC = () => {

    const location = useLocation() 
    const locationPath = location.pathname
    const [loginModalIsOpnen, setLoginModalIsOpen] = useState(false)
    const [regModalIsOpnen, setRegModalIsOpen] = useState(false)

    // esc event listener for modal window
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && loginModalIsOpnen) {
              setLoginModalIsOpen(false)
            }
            if (event.key === "Escape" && regModalIsOpnen) {
                setRegModalIsOpen(false)
              }
          };
      
          document.addEventListener("keydown", handleKeyDown);

          return () => {
            document.removeEventListener("keydown", handleKeyDown);
          };
    }, [loginModalIsOpnen, regModalIsOpnen])

    // login modal opener
    function loginClickHandler() {
        setLoginModalIsOpen(true)
    }

    // registration modal opener
    function regClickHandler() {
        setRegModalIsOpen(true)
    }

    return (
        <>
        <header style={{ 
    backgroundColor: locationPath === '/' ? 'transparent' : undefined, 
    paddingTop: locationPath === '/'  ? '40px' : undefined
  }}  className={css.header}>
            <div className={css.logoSection}><Link className={css.mainLink} to='/'>Nanny.Services</Link></div>
            <div className={css.linkSection}>
                <ul className={css.linkList}>
                    <Link className={css.link} to='/'>Home</Link>
                    <Link className={`${css.link} ${locationPath === '/nannies' ? css.isHere : null}`} to='/nannies'>Nannies</Link>
                    {locationPath !== '/' ? <Link className={`${css.link} ${locationPath === '/favorites' ? css.isHere : null}`} to='/favorites'>Favorites</Link> : null}
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