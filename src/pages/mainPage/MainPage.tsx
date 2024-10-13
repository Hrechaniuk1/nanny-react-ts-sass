// gen imports
import { FC } from "react";
import { useSelector } from "react-redux";
// component imports
import Header from "../../components/Hedaer/Hedaer";
import Icon from "../../components/Icon/Icon";
import { itemsSelector } from "../../redux/selector";
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import LoginModal from "../../components/LoginModal/LoginModal";
// types

// component

const MainPage: FC = () => {

    const items = useSelector(itemsSelector)

    return (
        <>
        <Header></Header>
        <div>
            <h1>Make Life Easier for the Family:</h1>
            <p>Find Babysitters Online for All Occasions</p>
            <button>Get started 
                <Icon iconName='Arrow-16'></Icon>
            </button>
        </div>
        <div>
            <span><Icon iconName="feCheck0"></Icon></span>
            <ul>
                <li><h4>Experienced nannies</h4></li>
                <li>{items?.length}</li>
            </ul>
            <RegistrationModal></RegistrationModal>
            <LoginModal></LoginModal>
        </div>
        </>
    )
}

export default MainPage