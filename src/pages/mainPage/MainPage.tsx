import { FC } from "react";
// 
import Header from "../../components/Hedaer/Hedaer";
import Icon from "../../components/Icon/Icon";
// types
type Props = {
    amount: number
}

const MainPage: FC<Props> = ({amount}) => {
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
                <li>{amount}</li>
            </ul>
        </div>
        </>
    )
}

export default MainPage