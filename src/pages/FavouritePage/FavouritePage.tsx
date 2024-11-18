// gen imports
import {FC, useState} from 'react'
import { useSelector } from 'react-redux'

// custom imports
import { favsSelector, itemsSelector } from '../../redux/selector'
import NanniesList from '../../components/NanniesList/NanniesList'
import FilterSelect from '../../components/FilterSelect/FilterSelect'

// styles
import css from './FavouritePage.module.scss'

// component 
const FavouritePage: FC = () => {

    const [sortBy, setSortBy] = useState<'rating' | 'price_per_hour' | 'name'>('name');
    const items = useSelector(itemsSelector)
    const favs = useSelector(favsSelector)

    
     
    return (
        <div className={css.page}>
            <FilterSelect setSort={setSortBy}></FilterSelect>
            <NanniesList data={items} idList={favs} sotrBy={sortBy}></NanniesList>
        </div>
    )

}

export default FavouritePage