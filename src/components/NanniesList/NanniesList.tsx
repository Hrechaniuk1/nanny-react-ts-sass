// get imports
import { FC } from "react"

// custom imports
import NannieCard from "../NannieCard/NannieCard"
import { NannyResponse } from "../../redux/operatioms"

// styles 
import css from './NanniesList.module.scss'

// types
type NanniesListProps = {
    data?: NannyResponse[] | undefined 
    idList?: string[]
}



const NanniesList: FC<NanniesListProps> = ({data, idList}) => {

    let list = data;
    if(idList && idList.length === 0) {
        list = []
    } else if (idList && idList.length !== 0 && data) {
        list = data.filter(item => idList.includes(item.id))
    }

return (
    <ul className={css.list}>
                {list?.map(item => {
                return <li key={item.id}><NannieCard data={item}></NannieCard></li>
                })}
            </ul>
)
}

export default NanniesList