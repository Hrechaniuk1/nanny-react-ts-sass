// geneRAL imports
import { FC, useState } from "react";
import { useSelector } from "react-redux";

// custom imports
import { NannyResponse } from "../../redux/operatioms";
import Icon from "../Icon/Icon";
import { addFavs, delFavs } from "../../redux/slise";
import { useAppDispatch } from "../../genTypes/types";
import { favsSelector } from "../../redux/selector";
import Modal from "../Modal/Modal";
import Appointment from "../Appointment/Appointment";

// styles
import css from './NannieCard.module.scss'

// types
type NannieCardProps = {
    data: NannyResponse
}

// component

const NannieCard: FC<NannieCardProps> = ({data}) => {

    const dispatch = useAppDispatch()
    const favs = useSelector(favsSelector)
    const isFav = favs.includes(data.id)

    const [readMore, setReadMore] = useState('readMoreHidden')
    const [appIsOpen, setAppIsOpen] = useState(false)

    // const today = Date.now()

    // read more function
    function readMoreHandler() {
        if(readMore === 'readMoreHidden') {
            setReadMore('readMoreVisible')
        } else {
            setReadMore('readMoreHidden')
        }
    }

    // add/delete favorites
    function favHandler() {
        if(favs.includes(data.id)) {
            dispatch(delFavs(data.id))
        } else {
            dispatch(addFavs(data.id))
        }
    }

    // open appointment form 
    function appointmentHandler() {
        setAppIsOpen(true)
    }

    return (
        <div className={css.cardContainer}>
            <div className={css.imgBox}>
                <img src={data.avatar_url} alt="" />
            </div>
            <div className={css.nannieBox}>
                <p className={css.title}>Nannie</p>
                <h3 className={css.name}>{data.name}</h3>
                <ul className={css.featuresList}>
                    <li className={css.feature}>Age: {data.birthday}</li>
                    <li className={css.feature}>Experience: {data.experience}</li>
                    <li className={css.feature}>Kids age: {data.kids_age}</li>
                    <li className={css.feature}>Characters: {...data.characters}</li>
                    <li className={css.feature}>Education: {data.education}</li>
                </ul>
                <p className={css.about}>{data.about}</p>
                <button className={css.more} onClick={readMoreHandler}>Read more...</button>
                <div className={ css[readMore]}>
                <ul className={css.revList}>
                    {data.reviews.map(item => <li key={item.reviewer + 2} >
                        <ul className={css.reviewList}>
                            <li><span className={css.revImg}>{item.reviewer.split('')[0]}</span></li>
                            <li>
                                <ul className={css.revNameList}>
                                    <li>{item.reviewer}</li>
                                    <li> <Icon className={css.iconRatingStar} iconName="icon_star" ></Icon> {item.rating}</li>
                                </ul>
                            </li>
                        </ul>
                        <p>{item.comment}</p>
                    </li>)}
                </ul>
                <button className={css.appointmentBtn} onClick={appointmentHandler}>Make an appointment</button>
                </div>
            </div>
            <ul className={css.infoBoard}>
                <li><Icon className={css.iconLocation} iconName="map-pin"></Icon> {data.location}</li>
                <li><Icon className={css.iconStar} iconName="icon-star"></Icon>Rating: {data.rating}</li>
                <li>Price / 1 hour: {data.price_per_hour}</li>
                <li><button className={css.favBtn} onClick={favHandler}><Icon className={!isFav ? css.iconHeart : css.iconHeartChosen} iconName="heart"></Icon></button></li>
            </ul>
            <Modal isOpen={appIsOpen}>
                <Appointment name={data.name} img={data.avatar_url} isOpen={setAppIsOpen} ></Appointment>
            </Modal>
        </div>
    )

}

export default NannieCard
