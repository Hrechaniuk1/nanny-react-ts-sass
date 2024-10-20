// geneRAL imports
import { FC } from "react";

// custom imports
import { NannyResponse } from "../../redux/operatioms";
import Icon from "../Icon/Icon";

// styles
import css from './NannieCard.module.scss'

// types
type NannieCardProps = {
    data: NannyResponse
}

// component

const NannieCard: FC<NannieCardProps> = ({data}) => {

    const today = Date.now()

    return (
        <div>
            <div>
                <img src={data.avatar_url} alt="" />
            </div>
            <div>
                <p>Nannie</p>
                <h3>{data.name}</h3>
                <ul>
                    <li>Age: {data.birthday}</li>
                    <li>Experience: {data.experience}</li>
                    <li>Kids age: {data.kids_age}</li>
                    <li>Characters: {...data.characters}</li>
                    <li>Education: {data.education}</li>
                </ul>
            </div>
            <ul>
                <li><Icon className={css.iconLocation} iconName="map-pin"></Icon> {data.location}</li>
                <li><Icon className={css.iconStar} iconName="icon-star"></Icon>Rating: {data.rating}</li>
                <li>Price / 1 hour: {data.price_per_hour}</li>
                <li><button><Icon className={css.iconHeart} iconName="heart"></Icon></button></li>
            </ul>
        </div>
    )

}

export default NannieCard
