// get imports
import { FC } from "react"

// custom imports
import NannieCard from "../NannieCard/NannieCard"
import { NannyResponse } from "../../redux/operatioms"

// styles 
import css from './NanniesList.module.scss'

// types
type NanniesListProps = {
    data: NannyResponse[] | undefined
}



const NanniesList: FC<NanniesListProps> = ({data}) => {

return (
    <ul className={css.list}>
                {data?.map(item => {
                return <li key={item.id}><NannieCard data={item}></NannieCard></li>
                })}
            </ul>
)
}

export default NanniesList