import { FC } from "react"; 
import { Link } from "react-router-dom"

// 

// types

// styles

import css from './Header.module.scss'

interface HeaderProps {
    customStyles?: React.CSSProperties; // Используем встроенный тип
  }


const Header: FC<HeaderProps> = ({customStyles}) => {

    return (
        <header style={customStyles} className={css.header}>
            <div className={css.logoSection}><Link className={css.mainLink} to='/'>Nanny.Services</Link></div>
            <div className={css.linkSection}>
                <ul className={css.linkList}>
                    <Link className={css.link} to='/'>Home</Link>
                    <Link className={css.link} to='/nannies'>Nannies</Link>
                </ul>
                <ul className={css.btnList}>
                    <li><button className={css.loginBtn}>Login</button></li>
                    <li><button className={css.regBtn}>Registration</button></li>
                </ul>
            </div>
        </header>
    )

}

export default Header