// gen imports
import { FC } from "react";
import { useSelector } from "react-redux";

// component imports
import Header from "../../components/Hedaer/Hedaer";
import Icon from "../../components/Icon/Icon";
import { itemsSelector } from "../../redux/selector";
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import LoginModal from "../../components/LoginModal/LoginModal";

// styles
import css from './MainPage.module.scss'

// component

const MainPage: FC = () => {

    const items = useSelector(itemsSelector)

    return (
        <>
        <Header></Header>
        <div className={css.container}>
        <div className={css.titleContainer}>
            <h1 className={css.title}>Make Life Easier for the Family:</h1>
            <p className={css.description}>Find Babysitters Online for All Occasions</p>
            <button className={css.getStarted}>Get started 
                <Icon className={css.iconGet} iconName='Arrow-16'></Icon>
            </button>
        </div>
        <div className={css.imgContainer}>
            <div className={css.nannies}>
            <span className={css.iconBox}><Icon className={css.icon} iconName="feCheck0"></Icon></span>
            <ul>
                <li><h4>Experienced nannies</h4></li>
                <li>{items?.length}</li>
            </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default MainPage