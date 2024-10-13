import sprite from '../../../public/symbol-defs.svg'
import { FC } from "react";

type type = {
    iconName: string
}

const Icon:FC<type> = ({iconName}) => {
    return (
        <svg>
            <use href={`${sprite}#icon-${iconName}`} ></use>
        </svg>
    )
}

export default Icon