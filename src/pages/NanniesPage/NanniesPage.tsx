// gen imports
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// custom imports
import { useAppDispatch } from "../../genTypes/types";
import { itemsSelector, isLoadingSelector } from "../../redux/selector";
import { getDataFromCollectionOperation } from "../../redux/operatioms";
import NanniesList from "../../components/NanniesList/NanniesList";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import Loading from "../../components/Loading/Loading";

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
    const isLoading = useSelector(isLoadingSelector)


    return (
        <div className={css.page}>
        {isLoading ? <Loading></Loading> : 
        <><FilterSelect setSort={setSortBy}></FilterSelect>
        <NanniesList data={nannies}></NanniesList></>}
        </div>
    )
}

export default NanniesPage