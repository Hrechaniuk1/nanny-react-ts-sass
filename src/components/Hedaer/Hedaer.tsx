import { FC } from "react"; 
import { Link } from "react-router-dom"

// 

// types

interface HeaderProps {
    customStyles?: React.CSSProperties; // Используем встроенный тип
  }


const Header: FC<HeaderProps> = ({customStyles}) => {

    return (
        <header>
            <div><Link to='/'>Nanny.Services</Link></div>
            <div>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/nannies'>Nannies</Link>
                </ul>
                <ul>
                    <li><button>Login</button></li>
                    <li><button>Registration</button></li>
                </ul>
            </div>
        </header>
    )

}

export default Header