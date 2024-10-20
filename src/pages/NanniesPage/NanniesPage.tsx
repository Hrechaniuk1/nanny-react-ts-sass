// gen imports
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

// components imports
import { useAppDispatch } from "../../genTypes/types";
import { itemsSelector } from "../../redux/selector";
import { getDataFromCollectionOperation } from "../../redux/operatioms";
import NanniesList from "../../components/NanniesList/NanniesList";

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
        <div className={css.page}>
            <NanniesList data={nannies}></NanniesList>
        </div>
    )
}

export default NanniesPage