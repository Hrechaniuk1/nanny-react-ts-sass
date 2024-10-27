// gen imports
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// custom imports
import { useAppDispatch } from "../../genTypes/types";
import { itemsSelector } from "../../redux/selector";
import { getDataFromCollectionOperation } from "../../redux/operatioms";
import NanniesList from "../../components/NanniesList/NanniesList";
import FilterSelect from "../../components/FilterSelect/FilterSelect";

// styles
import css from './NanniesPage.module.scss'

// types



const NanniesPage: FC = () => {

    const dispatch = useAppDispatch()
    const [sortBy, setSortBy] = useState('name')

    useEffect(() => {

        dispatch(getDataFromCollectionOperation(sortBy))

    }, [dispatch, sortBy])

    const nannies = useSelector(itemsSelector)


    return (
        <div className={css.page}>
            <FilterSelect setSort={setSortBy}></FilterSelect>
            <NanniesList data={nannies}></NanniesList>
        </div>
    )
}

export default NanniesPage