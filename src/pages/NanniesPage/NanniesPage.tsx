// gen imports
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

// components imports
import { useAppDispatch } from "../../genTypes/types";
import { itemsSelector } from "../../redux/selector";
import { getDataFromCollectionOperation } from "../../redux/operatioms";
import NannieCard from "../../components/NannieCard/NannieCard";

// styles
import css from './NanniesPage.module.scss'

// types



const NanniesPage: FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(getDataFromCollectionOperation())

    }, [dispatch])

    const nannies = useSelector(itemsSelector)


    return (
        <div>
            <ul>
                {nannies?.map(item => {
                return <li key={item.id}><NannieCard data={item}></NannieCard></li>
                })}
            </ul>
        </div>
    )
}

export default NanniesPage