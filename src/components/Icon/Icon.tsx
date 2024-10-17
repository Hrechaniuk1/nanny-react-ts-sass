import sprite from '../../assets/symbol-defs.svg'
import { FC } from "react";

type type = {
    iconName: string;
    className: string;
}

const Icon:FC<type> = ({iconName, className}) => {
    return (
        <svg className={className}>
            <use href={`${sprite}#icon-${iconName}`} ></use>
        </svg>
    )
}

export default Icon