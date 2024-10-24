// gen imports
import {FC} from 'react'
import { useSelector } from 'react-redux'

// custom imports
import { favsSelector, itemsSelector } from '../../redux/selector'
import NanniesList from '../../components/NanniesList/NanniesList'

// styles
import css from './FavouritePage.module.scss'

// component 
const FavouritePage: FC = () => {

    const items = useSelector(itemsSelector)
    const favs = useSelector(favsSelector)
    
    return (
        <div className={css.page}>
            <NanniesList data={items} idList={favs}></NanniesList>
        </div>
    )

}

export default FavouritePage