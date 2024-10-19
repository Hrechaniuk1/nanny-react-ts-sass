// gen imports
import { FC } from "react";
import { useSelector } from "react-redux";

// components imports
import { itemsSelector } from "../../redux/selector";

// styles
import css from './NanniesPage.module.scss'

// types



const NanniesPage: FC = () => {

    const nannies = useSelector(itemsSelector)


    return (
        <div>
            <ul>
                {nannies?.map(item => {
                return <li key={item.id}></li>
                })}
            </ul>
        </div>
    )
}

export default NanniesPage