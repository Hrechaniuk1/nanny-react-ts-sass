// gen imports
import {FC} from 'react'

// styles
import css from './Loading.module.scss'


// component
const Loading: FC = () => {


    return (
        <div className={css.loadBox}>
            <span className={css.loader}></span>
        </div>
    )
}

export default Loading